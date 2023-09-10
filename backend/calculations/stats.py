from script import *
from datetime import datetime

# start_date = datetime(2023, 1, 1)
# end_date = datetime(2023, 12, 31)

def get_user_comments(user_id):
    # Запрос для получения комментариев на пользователя по его ID
    query_user_comments = """
    SELECT comments FROM hack_comments WHERE user_id = %s
    """
    cursor.execute(query_user_comments, (user_id,))
    user_comments = cursor.fetchall()
    return [comment[0] for comment in user_comments]

def get_team_stats(team_id):
    query_wins = """
        SELECT COUNT(*) FROM team_statis WHERE team_id = %s AND result = 'Победитель'
    """
    cursor.execute(query_wins, (team_id,))
    total_wins = cursor.fetchone()[0]

    query_prizes = """
        SELECT COUNT(*) FROM team_statis WHERE team_id = %s AND result = 'Призер'
    """
    cursor.execute(query_prizes, (team_id,))
    total_prizes = cursor.fetchone()[0]

    query_total_hackathons = """
        SELECT COUNT(*) FROM team_statis WHERE team_id = %s
    """
    cursor.execute(query_total_hackathons, (team_id,))
    total_hackathons = cursor.fetchone()[0]

    result_list = [{
        "total_wins": total_wins,
        "total_prizes": total_prizes,
        "total_hackathons": total_hackathons
    }]

    return result_list

def get_team_stats_by_period(team_id, start_date, end_date):
    # Запрос для получения статистики команды за определенный период
    query = """
        SELECT 
            teams.name AS team_name,
            COUNT(team_statis.team_id) AS total_hackathons,
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes
        FROM teams
        LEFT JOIN team_statis ON teams.team_id = team_statis.team_id
        LEFT JOIN hack ON team_statis.hack_id = hack.hack_id
        WHERE teams.team_id = %s
          AND team_statis.result IS NOT NULL
          AND hack.event_start >= %s
          AND hack.event_end <= %s
        GROUP BY teams.name
    """
    cursor.execute(query, (team_id, start_date, end_date))
    teams_statistics = cursor.fetchall()

    result_list = [{"team_name": row["team_name"], "total_hackathons": row["total_hackathons"],
                    "total_wins": row["total_wins"], "total_prizes": row["total_prizes"]} for row in teams_statistics]

    return result_list

def get_all_teams_stats_by_period(start_date, end_date):
    query = """
        SELECT 
            teams.name AS team_name,
            COUNT(team_statis.team_id) AS total_hackathons,
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes
        FROM teams
        LEFT JOIN team_statis ON teams.team_id = team_statis.team_id
        LEFT JOIN hack ON team_statis.hack_id = hack.hack_id
        WHERE team_statis.result IS NOT NULL
          AND hack.event_start >= %s
          AND hack.event_end <= %s
        GROUP BY teams.name
    """
    cursor.execute(query, (start_date, end_date))
    teams_statistics = cursor.fetchall()

    result_list = [{"team_name": row["team_name"], "total_hackathons": row["total_hackathons"],
                    "total_wins": row["total_wins"], "total_prizes": row["total_prizes"]} for row in teams_statistics]

    return result_list

def get_user_stats(user_id):
    query = """
        SELECT
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes,
            COUNT(team_statis.team_id) AS total_hackathons
        FROM "user"
        LEFT JOIN team_statis ON "user".team_id = team_statis.team_id
        WHERE "user".user_id = %s
    """
    cursor.execute(query, (user_id,))
    user_statistics = cursor.fetchone()

    return user_statistics

def get_user_stats_in_period(user_id, start_date, end_date):
    query = """
        SELECT
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes,
            COUNT(team_statis.team_id) AS total_hackathons
        FROM "user"
        LEFT JOIN team_statis ON "user".team_id = team_statis.team_id
        INNER JOIN hack ON team_statis.hack_id = hack.hack_id
        WHERE "user".user_id = %s
            AND hack.event_start >= %s
            AND hack.event_end <= %s
    """
    cursor.execute(query, (user_id, start_date, end_date))
    user_statistics = cursor.fetchone()

    return user_statistics

# stats for all users
def get_all_users_stats():
    query = """
        SELECT
            "user".user_id,
            "user".name,
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes,
            COUNT(team_statis.team_id) AS total_hackathons
        FROM "user"
        LEFT JOIN team_statis ON "user".team_id = team_statis.team_id
        GROUP BY "user".user_id, "user".name
    """
    cursor.execute(query)
    user_statistics = cursor.fetchall()

    result_list = [{"user_id": row["user_id"], "total_wins": row["total_wins"], "total_prizes": row["total_prizes"], "total_hackathons": row["total_hackathons"]} for row in user_statistics]

    return result_list

#users - time - stats

def get_all_users_stats_by_period(start_date, end_date):
    query = """
        SELECT
            "user".user_id,
            COUNT(CASE WHEN team_statis.result = 'Победитель' THEN 1 ELSE NULL END) AS total_wins,
            COUNT(CASE WHEN team_statis.result = 'Призер' THEN 1 ELSE NULL END) AS total_prizes,
            COUNT(team_statis.team_id) AS total_hackathons
        FROM "user"
        LEFT JOIN team_statis ON "user".team_id = team_statis.team_id
        LEFT JOIN hack ON team_statis.hack_id = hack.hack_id
        WHERE hack.event_start >= %s
        AND hack.event_end <= %s
        GROUP BY "user".user_id
    """
    cursor.execute(query, (start_date, end_date))
    user_statistics = cursor.fetchall()

    result_list = [{"user_id": row["user_id"], "total_wins": row["total_wins"], "total_prizes": row["total_prizes"],
                    "total_hackathons": row["total_hackathons"]} for row in user_statistics]
    return result_list






