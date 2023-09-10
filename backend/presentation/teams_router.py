from fastapi import APIRouter, Query, Path, Header, HTTPException, status, Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.responses import JSONResponse

from creating_models import TeamCreateRequest
from response_models import TeamInfoResponse

# create app
router = APIRouter(prefix="/api-teams")


@router.get("/{item_id}", response_model=TeamInfoResponse)
async def read_item(item_id: int) -> Response:
    json_compatible_item_data = jsonable_encoder(Response)
    return JSONResponse(content=json_compatible_item_data)


# @router.get("/{item_id}/stats")
# async def read_item(item_id: int = Path(..., example="999")) -> Response:
#     return {"id": item_id}


@router.post("/{item_id}", response_model=TeamCreateRequest)
async def create_item(item: TeamCreateRequest) -> JSONResponse:
    json_compatible_item_data = jsonable_encoder(TeamCreateRequest)
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
