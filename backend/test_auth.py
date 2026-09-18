from jwt_auth import create_access_token, decode_access_token

def demo():
    token = create_access_token("local-user")
    assert decode_access_token(token)["sub"] == "local-user"
    assert decode_access_token(f"{token}changed") is None

if __name__ == "__main__":
    demo()