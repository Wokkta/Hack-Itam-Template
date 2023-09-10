import psycopg2

# Подключение к базе данных
connection = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_user",
    password="your_password",
)
cursor = connection.cursor()


# INSERT * INTO users
def add_user(user_data):
    insert_query = """
        INSERT 
            (
                username, 
                password, 
                status,
                name, 
                social_networks, 
                stack,
                tags,
                image,
                description
            )        
        INTO 
            users
        VALUES 
            (
                %(username)s, 
                %(password)s, 
                %(status)s, 
                %(name)s, 
                %(social_networks)s, 
                %(stack)s, 
                %(tags)s,
                %(image)s,
                %(description)s
            )
    RETURNING id
    """
    cursor.execute(insert_query, user_data)
    connection.commit()


# Пример обновления данных пользователя по user_id
def update_user(user_id, updated_data):
    update_query = """
    UPDATE "user"
    SET name = %(name)s, social_network = %(social_network)s, team_id = %(team_id)s
    WHERE user_id = %(user_id)s
    """
    updated_data["user_id"] = user_id
    cursor.execute(update_query, updated_data)
    connection.commit()


# Пример удаления пользователя по user_id
def delete_user(user_id):
    delete_query = 'DELETE FROM "user" WHERE user_id = %s'
    cursor.execute(delete_query, (user_id,))
    connection.commit()


# INSERT * INTO hacks
def add_hack(hack_data):
    insert_query = """
    INSERT 
        (
            name, 
            link,
            registration_link,
            registration_started_at,
            registration_ended_at,
            event_started_at,
            event_ended_at,
            format,
            city,
            prize,
            team_members_number_min,
            team_members_number_max,
            tags,
            description
        )
    INTO 
        hacks 
    VALUES 
        (
            %(name)s,
            %(website_link),
            %(registration_link)s,
            %(registration_started_at)s,
            %(registration_ended_at)s,
            %(event_started_at)s,
            %(event_ended_at)s,
            %(format)s, 
            %(city)s, 
            %(prize)s,
            %(team_members_number_min)s,
            %(team_members_number_max)s,
            %(tag)s,
            %(description)s 
        )
    RETURNING id
    """
    cursor.execute(insert_query, hack_data)
    connection.commit()


# INSERT * INTO teams
def add_team(team_data, user_id):
    insert_query = """
    # INSERT 
    #     (name, age, image, division, description)
    # INTO 
    #     teams 
    # VALUES 
    #     (%(name)s, %(age)s, %(image)s, %(division)s, %(description)s)

    INSERT 
            (
                team_name,
                "{user_id}, + "{members}", // how to add captain id to members list?
                capitan,
                image,
                description
            )        
        INTO 
            users
        VALUES 
            (
                %(team_name)s, 
                %(str(user_it) + members)s, // how to add captain id to members list?
                %(user_id)s,
                %(image)s,
                %(description)s
            )
    RETURNING id
    """
    cursor.execute(insert_query, team_data)
    team_id = cursor.fetchone()[0]  # Получаем ID новой команды
    connection.commit()
    return team_id


# Пример обновления данных команды по team_id
def update_team(team_id, updated_data):
    update_query = """
    UPDATE team
    SET name = %(name)s, age = %(age)s, division = %(division)s
    WHERE team_id = %(team_id)s
    """
    updated_data["team_id"] = team_id
    cursor.execute(update_query, updated_data)
    connection.commit()


def delete_team(team_id):
    delete_query = "DELETE FROM team WHERE team_id = %s"
    cursor.execute(delete_query, (team_id,))
    connection.commit()


# Пример обновления данных хакатона по hack_id
def update_hack(hack_id, updated_data):
    update_query = """
    UPDATE hack
    SET hack_name = %(hack_name)s, description = %(description)s, data = %(data)s, teg = %(teg)s, amount_of_people = %(amount_of_people)s, price = %(price)s, dedline = %(dedline)s, format = %(format)s, city = %(city)s, reg_link = %(reg_link)s, main_link = %(main_link)s
    WHERE hack_id = %(hack_id)s
    """
    updated_data["hack_id"] = hack_id
    cursor.execute(update_query, updated_data)
    connection.commit()


# Пример удаления хакатона по hack_id
def delete_hack(hack_id):
    delete_query = "DELETE FROM hack WHERE hack_id = %s"
    cursor.execute(delete_query, (hack_id,))
    connection.commit()


# INSERT * INTO catalog
def add_to_catalog(catalog_data, user_id):
    insert_query = """
    INSERT 
        (
            title,
            inner_link, 
            url, 
            publication_type 
            tags,
            created_by, 
            created_at,
            description 
            )
    INTO 
        catalog 
    VALUES 
        (
            %(title)s,
            %(url)s, 
            %(inner_link)s, 
            %(publication_type)s, 
            %(tags)s, 
            %(user_id)s, 
            %(created_date)s
            %(description)s
        )
    RETURNING id
    """
    cursor.execute(insert_query, catalog_data)
    catalog_id = cursor.fetchone()[0]  # Получаем ID новой записи
    connection.commit()
    return catalog_id


# Пример обновления данных в таблице "catalog" по id
def update_catalog(catalog_id, updated_data):
    update_query = """
    UPDATE catalog
    SET url = %(url)s, inner_link = %(inner_link)s, type_tag = %(type_tag)s, interests = %(interests)s, created_by = %(created_by)s, description = %(description)s, link = %(link)s, create_date = %(create_date)s
    WHERE id = %(id)s
    """
    updated_data["id"] = catalog_id
    cursor.execute(update_query, updated_data)
    connection.commit()


# Пример удаления данных из таблицы "catalog" по id
def delete_from_catalog(catalog_id):
    delete_query = "DELETE FROM catalog WHERE id = %s"
    cursor.execute(delete_query, (catalog_id,))
    connection.commit()


def add_to_team_statis(team_id, hack_id, result):
    insert_query = """
    INSERT INTO team_statis (team_id, hack_id, result)
    VALUES (%(team_id)s, %(hack_id)s, %(result)s)
    RETURNING team_statis_id
    """
    team_statis_data = {"team_id": team_id, "hack_id": hack_id, "result": result}
    cursor.execute(insert_query, team_statis_data)
    team_statis_id = cursor.fetchone()[0]  # Получаем ID новой записи
    connection.commit()
    return team_statis_id


# Пример добавления новых данных в таблицу "team_statis"
new_team_statis_id = add_to_team_statis(1, 1, "Победители")


# Пример обновления данных в таблице "team_statis" по id
def update_team_statis(team_statis_id, updated_data):
    update_query = """
    UPDATE team_statis
    SET team_id = %(team_id)s, hack_id = %(hack_id)s, result = %(result)s
    WHERE team_statis_id = %(team_statis_id)s
    """
    updated_data["team_statis_id"] = team_statis_id
    cursor.execute(update_query, updated_data)
    connection.commit()


# Пример удаления данных из таблицы "team_statis" по id
def delete_from_team_statis(team_statis_id):
    delete_query = "DELETE FROM team_statis WHERE team_statis_id = %s"
    cursor.execute(delete_query, (team_statis_id,))
    connection.commit()
