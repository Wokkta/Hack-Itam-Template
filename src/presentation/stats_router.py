import datetime
import sys
import os

script_dir = os.path.dirname(os.path.abspath(__file__))
script_path = os.path.join(script_dir, "stats.py")

if script_path not in sys.path:
    sys.path.append(script_path)

from stats import (
    get_user_comments,
    get_team_stats,
    get_team_stats_by_period,
    get_all_teams_stats_by_period,
    get_user_stats,
    get_user_stats_in_period,
    get_all_users_stats,
    get_all_users_stats_by_period,
)


@app.get("/user_comments/{user_id}", response_model=list)
async def get_comments(user_id: int):
    comments = get_user_comments(user_id)
    return comments

@app.get("/team_stats/{team_id}", response_model=list)
async def get_stats(team_id: int):
    stats = get_team_stats(team_id)
    return stats

@app.get("/team_stats_by_period/{team_id}", response_model=list)
async def get_stats_by_period(team_id: int, start_date: datetime, end_date: datetime):
    stats = get_team_stats_by_period(team_id, start_date, end_date)
    return stats

@app.get("/all_teams_stats_by_period", response_model=list)
async def get_all_stats_by_period(start_date: datetime, end_date: datetime):
    stats = get_all_teams_stats_by_period(start_date, end_date)
    return stats

@app.get("/user_stats/{user_id}", response_model=list)
async def get_user(user_id: int):
    stats = get_user_stats(user_id)
    return stats

@app.get("/user_stats_by_period/{user_id}", response_model=list)
async def get_user_stats_period(user_id: int, start_date: datetime, end_date: datetime):
    stats = get_user_stats_in_period(user_id, start_date, end_date)
    return stats

@app.get("/all_users_stats", response_model=list)
async def get_all_users():
    stats = get_all_users_stats()
    return stats

@app.get("/all_users_stats_by_period", response_model=list)
async def get_all_users_period(start_date: datetime, end_date: datetime):
    stats = get_all_users_stats_by_period(start_date, end_date)
    return stats
