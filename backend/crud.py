from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
import models, schemas
import uuid
import base64
import hashlib
import secrets


def hash_password(password: str) -> str:
    salt = secrets.token_bytes(16)
    digest = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 600_000)
    return "pbkdf2_sha256$600000${}${}".format(
        base64.urlsafe_b64encode(salt).decode(),
        base64.urlsafe_b64encode(digest).decode(),
    )


def verify_password(password: str, stored_password: str) -> bool:
    if not stored_password.startswith("pbkdf2_sha256$"):
        return secrets.compare_digest(stored_password, password)

    try:
        _, iterations, salt, expected_digest = stored_password.split("$")
        actual_digest = hashlib.pbkdf2_hmac(
            "sha256",
            password.encode(),
            base64.urlsafe_b64decode(salt),
            int(iterations),
        )
        return secrets.compare_digest(
            base64.urlsafe_b64encode(actual_digest).decode(),
            expected_digest,
        )
    except (ValueError, TypeError):
        return False

def get_user(db: Session, user_id: str):
    return db.query(models.User).filter(models.User.id == user_id).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(
        id=user.id,
        nickname=user.nickname,
        tag=user.tag,
        password=hash_password(user.password),
        puuid=str(uuid.uuid4())
    )
    db.add(db_user)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        return None
    db.refresh(db_user)
    return db_user


def authenticate_user(db: Session, user_id: str, password: str):
    db_user = get_user(db, user_id)
    if db_user is None or not verify_password(password, db_user.password):
        return None

    if not db_user.password.startswith("pbkdf2_sha256$"):
        db_user.password = hash_password(password)
    db_user.is_active = True
    db.commit()
    db.refresh(db_user)
    return db_user
