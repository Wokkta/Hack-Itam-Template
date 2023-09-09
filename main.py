from fastapi import FastAPI
from starlette.responses import JSONResponse
from models import User
import requests


# create app
endpoints = FastAPI()

# List of endpoints:
#   1. user endpoints
#   2. team endpoints
#   3. hacks endpoints
#   4. catalog endpoints

# 1. user endpoints

@endpoints.get("/users/{item_id}")
async def general_user_info(item_id:int):
    url = f"http://api.example.com/users/{item_id}"

    try:
        response = requests.get(url)
        data = response.json()

        if response.status_code == 200:
            user_info = {
                "id": data["id"],
                "status": data["status"],
                "name": data["name"],
                "team_id": data["team_id"],
                "team_name": data["team_name"],
                "social_networks": data["social_networks"],
                "img": data["img"],
                "description": data["description"],
                "stack": data["stack"],
                "interests": data["interests"]
            }
            return user_info
        else:
            return None
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None

@endpoints.get("/users/{item_id}/stats")
async def user_stats(item_id:int):
    return {"id" : item_id}

@endpoints.post("/")
async def create_user(item: User, item_id: int):
    return {"id": item_id}


# team endpoints


#hacks endpoints


# catalog endpoints
