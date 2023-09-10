from fastapi import APIRouter, Query, Path, Header, HTTPException, status, Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.responses import JSONResponse
import requests

from creating_models import UserCreateRequest
from response_models import UserInfoResponse

# create app
router = APIRouter(prefix="/api-users")


@router.get("/{item_id}", response_model=UserInfoResponse)
async def read_item(item_id: int) -> Response:
    json_compatible_item_data = jsonable_encoder(Response)
    return JSONResponse(content=json_compatible_item_data)


# @router.get("/{item_id}/stats")
# async def user_stats(item_id: int = Path(..., example="999")) -> Response:
#     return {"id": item_id}


@router.post("/{item_id}", response_model=UserCreateRequest)
async def create_item(item: UserCreateRequest) -> JSONResponse:
    json_compatible_item_data = jsonable_encoder(UserCreateRequest)
    return JSONResponse(content=json_compatible_item_data)


# @router.post("/query")
# async def query_user(name: str = Query(..., example="Masha")):
#     return name


# @router.post("/headers")
# async def user(x_api_key: str = Header(..., example="2.718271")):
#     if x_api_key != "3.1415":
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN, detail="Access denied"
#         )
#
#     return "ok"
