from sqlalchemy.orm import Session
import models, schemas
import uuid

def get_user(db: Session, user_id: str):
    return db.query(models.User).filter(models.User.id == user_id).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        id=user.id,
        nickname=user.nickname,
        tag=user.tag,
        password=user.password,
        puuid=str(uuid.uuid4())
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user