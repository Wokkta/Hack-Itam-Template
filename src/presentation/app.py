from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from presentation import users_router, hacks_router, teams_router, publications_router


def create_app() -> FastAPI:
    fastapi_app = FastAPI()

    fastapi_app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    fastapi_app.include_router(users_router.router)
    fastapi_app.include_router(teams_router.router)
    fastapi_app.include_router(hacks_router.router)
    fastapi_app.include_router(publications_router.router)

    return fastapi_app
