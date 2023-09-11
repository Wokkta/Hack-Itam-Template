def create_app() -> FastAPI:
    fastapi_app = FastAPI()

    fastapi_app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "https://example.com",  # Replace with your allowed origins
            "https://another-domain.com",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include your routers as you were doing before
    fastapi_app.include_router(users_router.router)
    fastapi_app.include_router(teams_router.router)
    fastapi_app.include_router(hacks_router.router)
    fastapi_app.include_router(publications_router.router)

    return fastapi_app

