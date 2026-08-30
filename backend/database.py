import os
from pathlib import Path
from dotenv import load_dotenv
from sqlalchemy import create_engine, URL
from sqlalchemy.orm import sessionmaker, declarative_base

BASE_DIR = Path(__file__).resolve().parent
env_path = BASE_DIR / ".env"
load_dotenv(dotenv_path=env_path, encoding="utf-8")

db_port = os.getenv("DB_PORT", "5432")
db_port = int(db_port) if db_port.isdigit() else 5432

SQLALCHEMY_DATABASE_URL = URL.create(
    drivername="postgresql+pg8000",
    username=os.getenv("DB_USER", "postgres"),
    password=os.getenv("DB_PASSWORD",""),
    host=os.getenv("DB_HOST", "localhost"),
    port=db_port,
    database=os.getenv("DB_NAME", "gambling_db"),
)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()