from pydantic import BaseModel, Field


class User(BaseModel):
    # id: int
    status: str
    name: str = Field(..., example="Masha")
    team_id: int
    team_name: str
    social_networks: str | None = None
    # img:
    # feedback_id:
    description: str | None = None
    stack: set[str]
    interests: str | None = None
