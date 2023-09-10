from fastapi import APIRouter, Query, Path, Header, HTTPException, status, Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.responses import JSONResponse

from creating_models import PublicationCreateRequest
from response_models import PublicationInfoResponse


# create app
router = APIRouter(prefix="/api-publications")


@router.get("/{item_id}", response_model=PublicationInfoResponse)
async def read_item(item_id: int) -> Response:
    json_compatible_item_data = jsonable_encoder(Response)
    return JSONResponse(content=json_compatible_item_data)


# @router.get("/{item_id}/stats")
# async def read_item(item_id: int = Path(..., example="999")) -> Response:
#     return {"id": item_id}


@router.post("/{item_id}", response_model=PublicationCreateRequest)
async def create_item(item: PublicationCreateRequest) -> JSONResponse:
    json_compatible_item_data = jsonable_encoder(PublicationCreateRequest)
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
