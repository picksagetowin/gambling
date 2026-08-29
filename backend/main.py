from database import engine
from fastapi import FastAPI
import models

# 서버 구동 시 DB에 users 테이블이 없으면 자동 생성
models.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def read_root():
  return {"status": "ok"}