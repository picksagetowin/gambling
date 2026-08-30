from sqlalchemy import Integer, String, Boolean, DateTime
from sqlalchemy import func
from sqlalchemy.sql.schema import Column
from .database import Base
from pydantic import BaseModel

class Users(Base):
    __tablename__ = 'users'

    id = Column(String, primary_key=True, unique=True, nullable=False)
    nickname = Column(String, nullable=True)
    tag = Column(String(5), nullable=True)
    password = Column(String(255), nullable=False)
    puuid = Column(String, unique=True, nullable=False)
    is_ative = Column(Boolean, nullable=False, defualt=False)
    money = Column(Integer, nullable=False, default=0)
    created_at = Column(DateTime, default=func.now())