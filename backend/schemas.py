from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    id: str
    nickname: str
    tag: str
    password: str

class UserResponse(BaseModel):
    id: str
    nickname: str
    tag: str
    puuid: str
    money: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True