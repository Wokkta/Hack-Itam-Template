from typing import Callable
from starlette import Starlette
from myfastapi.routing import ApiRouter


class FastApi(Starlette):
    def __init__(
        self,
        version: str = "0.1.0"
    ) -> None:
        self.version = version
	self.router: APIRouter = APIRouter()