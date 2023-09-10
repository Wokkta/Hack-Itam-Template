from starlette.responses import JSONResponse
import requests


from creating_models import UserCreateRequest
from response_models import UserInfoResponse


# return any file
@router.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}