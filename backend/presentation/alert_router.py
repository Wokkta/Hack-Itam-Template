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