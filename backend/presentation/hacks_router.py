from fastapi import APIRouter, Query, Path, Header, HTTPException, status, Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.responses import JSONResponse

from creating_models import HackCreateRequest
from response_models import HackInfoResponse


# create app
router = APIRouter(prefix="/api-hacks")


@router.get("/{item_id}", response_model=HackInfoResponse)
async def read_item(item_id: int) -> Response:
    json_compatible_item_data = jsonable_encoder(Response)
    return JSONResponse(content=json_compatible_item_data)


# @router.get("/{item_id}/stats")
# async def read_item(item_id: int = Path(..., example="999")) -> Response:
#     return {"id": item_id}


@router.post("/{item_id}", response_model=HackCreateRequest)
async def create_item(item: HackCreateRequest) -> JSONResponse:
    json_compatible_item_data = jsonable_encoder(HackCreateRequest)
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
