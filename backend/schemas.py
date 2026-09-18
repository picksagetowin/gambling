from pydantic import BaseModel, Field
from datetime import datetime

class UserCreate(BaseModel):
    id: str
    nickname: str
    tag: str = Field(max_length=5)
    password: str

class LoginRequest(BaseModel):
    id: str
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
