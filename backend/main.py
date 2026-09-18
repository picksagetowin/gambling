import os

from fastapi import Cookie, Depends, FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
import models, schemas, crud
from database import engine, get_db
from jwt_auth import create_access_token, decode_access_token

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="gambling")
COOKIE_SECURE = os.getenv("COOKIE_SECURE", "false").lower() == "true"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/auth/signup",response_model=schemas.UserResponse)
def signup(user:schemas.UserCreate, db: Session = Depends(get_db)):
    created_user = crud.create_user(db=db, user=user)
    if created_user is None:
        raise HTTPException(status_code=409, detail="이미 사용 중인 아이디입니다.")
    return created_user

@app.post("/auth/login", response_model=schemas.UserResponse)
def login(
    credentials: schemas.LoginRequest,
    response: Response,
    db: Session = Depends(get_db),
):
    user = crud.authenticate_user(db, credentials.id, credentials.password)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid username or password.")
    response.set_cookie(
        key="access_token",
        value=create_access_token(user.id),
        httponly=True,
        secure=COOKIE_SECURE,
        samesite="lax",
        max_age=3600,
        path="/",
    )
    return user
def get_current_user(
    access_token: str | None = Cookie(default=None),
    db: Session = Depends(get_db),
):
    claims = decode_access_token(access_token) if access_token else None
    user = crud.get_user(db, claims["sub"]) if claims else None
    if user is None:
        raise HTTPException(status_code=401, detail="Authentication required.")
    return user

@app.get("/auth/me", response_model=schemas.UserResponse)
def read_current_user(user=Depends(get_current_user)):
    return user

@app.post("/auth/logout", status_code=204)
def logout(response: Response):
    response.delete_cookie(
        key="access_token",
        httponly=True,
        secure=COOKIE_SECURE,
        samesite="lax",
        path="/",
    )

@app.get("/users/{user_id}", response_model=schemas.UserResponse)
def read_user(user_id: str, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="유저를 찾을수 없습니다.")
    return db_user
