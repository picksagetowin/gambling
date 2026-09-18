import base64
import hashlib
import hmac
import json
import os
import secrets
import time

# ponytail: temporary local key; set JWT_SECRET before running multiple server instances.
LOCAL_SECRET = secrets.token_urlsafe(32)

def _encode(value: dict) -> str:
    return base64.urlsafe_b64encode(
        json.dumps(value, separators=(",", ":")).encode()
    ).rstrip(b"=").decode()

def _decode(value: str) -> dict:
    return json.loads(base64.urlsafe_b64decode(value + "=" * (-len(value) % 4)))

def _secret() -> bytes:
    return os.getenv("JWT_SECRET", LOCAL_SECRET).encode()

def create_access_token(user_id: str) -> str:
    now = int(time.time())
    header = _encode({"alg": "HS256", "typ": "JWT"})
    payload = _encode({"sub": user_id, "iat": now, "exp": now + 3600})
    signature = hmac.new(_secret(), f"{header}.{payload}".encode(), hashlib.sha256).digest()
    return f"{header}.{payload}.{base64.urlsafe_b64encode(signature).rstrip(b'=').decode()}"

def decode_access_token(token: str) -> dict | None:
    try:
        header, payload, signature = token.split(".")
        expected = hmac.new(_secret(), f"{header}.{payload}".encode(), hashlib.sha256).digest()
        actual = base64.urlsafe_b64decode(signature + "=" * (-len(signature) % 4))
        claims = _decode(payload)
        if (
            _decode(header).get("alg") != "HS256"
            or not hmac.compare_digest(expected, actual)
            or not isinstance(claims.get("sub"), str)
            or not isinstance(claims.get("exp"), int)
            or claims["exp"] <= time.time()
        ):
            return None
        return claims
    except (ValueError, TypeError, UnicodeDecodeError, json.JSONDecodeError):
        return None