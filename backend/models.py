from typing import Union
from pydantic import BaseModel

class User(BaseModel):
    # id: int
    status: str
    name: str
    team_id: int
    team_name: str
    social_networks: Union[str, None] = None
    # img:
    # feedback_id:
    description: Union[str, None] = None
    stack: []
    interests: Union[str, None] = None

