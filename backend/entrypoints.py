from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from presentation.users_router import router as users_router  # Import users_router
from presentation.teams_router import router as teams_router
from presentation.hacks_router import router as hacks_router
from presentation.publications_router import router as publications_router

app = create_app()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
