import random
import bcrypt
import string
import psycopg2
from PIL import Image
import io
from datetime import datetime, timedelta
from random import randint

# def generate_random_image()
# users
# admins
# teams
# feedback
# team_statis
# hack_comments
# cataloge
# hacks
# requests

conn = psycopg2.connect(
    database="ваша_база_данных",
    user="ваш_пользователь",
    password="ваш_пароль",
    host="localhost",
    port="5432"
)

cur = conn.cursor()

def generate_random_image():
    image = Image.new('RGB', (100, 100), color=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
    image_io = io.BytesIO()
    image.save(image_io, format='JPEG')
    image_bytes = image_io.getvalue()
    return psycopg2.Binary(image_bytes)

names = ["Иван", "Анна", "Алексей", "Елена", "Дмитрий", "Ольга", "Максим", "Наталья", "Андрей", "Светлана"]
social_networks = ["https://facebook.com", "https://twitter.com", "https://vk", "https://telegram"]
stacks = ["Python", "Java", "C++", "JavaScript", "Ruby", "C#", "Go", "Kotlin", "Swift"]
jobs = ["Разработчик", "Аналитик данных", "Дизайнер", "Тестировщик", "Продуктовый менеджер"]
interests = ["Numpy", "Pandas", "Matplotlib", "TensorFlow", "PyTorch", "React", "Vue", "Flask", "Django"]
tags = ["ds/ml/dl", "front", "back", "fullstack", "design", "ctf", "product/project manager", "analysts and marketers", "gamedev", "robotics"]
github_links = ["https://github.com/user1", "https://github.com/user2", "https://github.com/user3"]

start_date = datetime(2022, 1, 1)
end_date = datetime(2023, 12, 31)

users = []
for i in range(20):
    name = random.choice(names)
    social_network = random.choice(social_networks)
    stack = ", ".join(random.sample(stacks, random.randint(1, len(stacks))))
    job = random.choice(jobs)
    team_id = random.randint(1, 5)
    github_link = random.choice(github_links)
    feedback_id = random.randint(1, 20)
    statuses = ["Сборная", "Тимлид", "Участник команды"]
    status = random.choice(statuses)
    if status == "Участник команды" and random.randint(1, 5) == 1:
        status = "Тимлид"

    password = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(12))

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    user_tags = random.sample(tags, random.randint(1, len(tags)))

    user_data = {
        "name": name,
        "social_network": social_network,
        "stack": stack,
        "job": job,
        "tag": ", ".join(user_tags),
        "team_id": team_id,
        "feedback_id": feedback_id,
        "image": generate_random_image(),
        "status": status,
        "github_link": github_link,
        "password": hashed_password.decode('utf-8')  # Декодирование байтов в строку
    }
    users.append(user_data)

# Вставка данных в таблицу "user"
for user_data in users:
    cur.execute(
        "INSERT INTO \"users\" (name, social_network, stack, job, tag, team_id, feedback_id, image, status, github_link, password) "
        "VALUES (%(name)s, %(social_network)s, %(stack)s, %(job)s, %(tag)s, %(team_id)s, %(feedback_id)s, %(image)s, %(status)s, %(github_link)s, %(password)s)",
        user_data
    )

conn.commit()


# Генерация данных для таблицы "admin"
admin_data = []
for i in range(5):
    admin_name = random.choice(names)
    admin_password = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(12))
    admin_permission = random.choice(["admin", "superadmin", "editor"])

    # Хеширование пароля
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(admin_password.encode('utf-8'), salt)

    admin_entry = {
        "name": admin_name,
        "password": hashed_password.decode('utf-8'),  # Декодирование байтов в строку
        "admin_permission": admin_permission
    }
    admin_data.append(admin_entry)

# Вставка данных в таблицу "admin"
for admin_entry in admin_data:
    cur.execute(
        "INSERT INTO admins (name, password, admin_permission) VALUES (%(name)s, %(password)s, %(admin_permission)s)",
        admin_entry
    )

# Коммит изменений
conn.commit()

# Генерация данных для таблицы "team"
team_data = []
for i in range(5):
    team_name = f"Команда {i + 1}"
    team_division = random.randint(1, 5)
    team_description = f"Описание команды {i + 1}"
    teams = [1, 2, 3, 4]
    random_team = random.choice(teams)

    team_entry = {
        "name": team_name,
        "image": generate_random_image(),
        "division": team_division,
        "description": team_description,
    }
    team_data.append(team_entry)

# Вставка данных в таблицу "team"
for team_entry in team_data:
    cur.execute(
        "INSERT INTO teams (name, image, division, description) VALUES (%(name)s, %(image)s, %(division)s, %(description)s)",
        team_entry
    )
conn.commit()

# Генерация данных для таблицы "feedback"
feedback_data = []
for i in range(20):
    user_id = random.randint(1, 20)
    hack_id = random.randint(1, 13)
    comments = f"Комментарий к хакатону {hack_id} от пользователя {user_id}"

    feedback_entry = {
        "user_id": user_id,
        "hack_id": hack_id,
        "comments": comments
    }
    feedback_data.append(feedback_entry)

# Вставка данных в таблицу "feedback"
for feedback_entry in feedback_data:
    cur.execute(
        "INSERT INTO feedback (user_id, hack_id, comments) VALUES (%(user_id)s, %(hack_id)s, %(comments)s)",
        feedback_entry
    )

# Коммит изменений
conn.commit()

# Генерация данных для таблицы "team_statis"
team_statis_data = []
for i in range(5):
    hack_id = random.randint(1, 13)  # Здесь предполагается, что у вас уже есть 12 хакатонов
    team_id = random.randint(1, 5)  # Здесь предполагается, что у вас уже есть 15 команд
    result = random.choice(["Победитель", "Участник", "Призер"])

    team_statis_entry = {
        "hack_id": hack_id,
        "team_id": team_id,
        "result": result
    }
    team_statis_data.append(team_statis_entry)

for team_statis_entry in team_statis_data:
    cur.execute(
        "INSERT INTO team_statis (hack_id, team_id, result) VALUES (%(hack_id)s, %(team_id)s, %(result)s)",
        team_statis_entry
    )
conn.commit()

hack_comments_data = []
for i in range(20):
    hack_id = random.randint(1, 13)
    user_id = random.randint(1, 20)
    comments = f"Комментарий пользователя {user_id} к хакатону {hack_id}"

    hack_comments_entry = {
        "hack_id": hack_id,
        "user_id": user_id,
        "comments": comments
    }
    hack_comments_data.append(hack_comments_entry)

# Вставка данных в таблицу "hack_comments"
for hack_comments_entry in hack_comments_data:
    cur.execute(
        "INSERT INTO hack_comments (hack_id, user_id, comments) VALUES (%(hack_id)s, %(user_id)s, %(comments)s)",
        hack_comments_entry
    )

conn.commit()

# Генерация данных для таблицы "catalog"
catalog_data = []
for i in range(20):
    url = f"https://example.com/hackathon_{i + 1}"
    inner_link = random.choice([True, False])
    type_tag = random.choice(["Тип 1", "Тип 2", "Тип 3"])
    interests = ", ".join(random.sample(interests, random.randint(1, len(interests))))
    created_by = f"Организатор {i + 1}"
    user_tags = random.sample(tags, random.randint(1, len(tags)))
    description = f"Описание хакатона {i + 1}"
    link = f"https://example.com/hackathon_{i + 1}"
    year = 2023
    random_date = datetime(year, randint(1, 12), randint(1, 28), randint(0, 23), randint(0, 59), randint(0, 59))

    catalog_entry = {
        "url": url,
        "inner_link": inner_link,
        "type_tag": type_tag,
        "interests": interests,
        "created_by": created_by,
        "description": description,
        "link": link,
        "tag": ", ".join(user_tags),
        "create_date": random_date
    }
    catalog_data.append(catalog_entry)

# Вставка данных в таблицу "catalog"
for catalog_entry in catalog_data:
    cur.execute(
        "INSERT INTO cataloge (url, inner_link,  tag, interests, created_by, description, link, create_date) "
        "VALUES (%(url)s, %(inner_link)s, %(tag)s, %(interests)s, %(created_by)s, %(description)s, %(link)s, %(create_date)s)",
        catalog_entry
    )
# Коммит изменений
conn.commit()


hackathons = [
    {
        "hack_name": "AI Generative Product",
        "description": "Описание AI Generative Product",
        "event_start": datetime(2023, 8, 4),
        "event_end": datetime(2023, 8, 19),
        "registration_start": None,
        "registration_end": datetime(2023, 7, 31),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн",
        "city": None,
        "reg_link": "https://ai-hackathon.gigaschool.ru/",
        "main_link": "https://ai-hackathon.gigaschool.ru/"

    },
    {
        "hack_name": "FINODAYS",
        "description": "Описание FINODAYS",
        "event_start": datetime(2023, 7, 25),
        "event_end": datetime(2023, 8, 29),
        "registration_start": None,
        "registration_end": datetime(2023, 7, 24),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн",
        "city": None,
        "reg_link": "https://changellenge.com/championships/finodays/?mindbox-message-key=7645423325150183424&mindbox-click-id=41e9b62d-2bb4-4654-bb4a-659ab8d7fe93&utm_source=1&utm_medium=1&utm_term=changellenge&utm_campaign=2",
        "main_link": "https://365.finopolis.ru/finodays/?mindbox-message-key=7645423325150183424&mindbox-click-id=41e9b62d-2bb4-4654-bb4a-659ab8d7fe93&utm_source=1&utm_medium=1&utm_term=changellenge&utm_campaign=2"
    },
    {
        "hack_name": "Код города 300 от Сбера",
        "description": "Описание Код города 300 от Сбера",
        "event_start": datetime(2023, 8, 12),
        "event_end": datetime(2023, 8, 13),
        "registration_start": None,
        "registration_end": datetime(2023, 7, 28),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Очный",
        "city": "Москва",
        "reg_link": "https://xn--300-5cdofb9bxbcax.xn--p1ai/",
        "main_link": "https://xn--300-5cdofb9bxbcax.xn--p1ai/"
    },
    {
        "hack_name": "Креатив на Волге",
        "description": "Описание Креатив на Волге",
        "event_start": datetime(2023, 8, 19),
        "event_end": datetime(2023, 8, 20),
        "registration_start": None,
        "registration_end": datetime(2023, 8, 4),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Очный",
        "city": "Волгоград",
        "reg_link": "http://kreativnavolge.ru/registration",
        "main_link": "http://kreativnavolge.ru/"
    },
    {
        "hack_name": "ТехЛидеры.рф",
        "description": "Описание ТехЛидеры.рф",
        "event_start": datetime(2023, 10, 13),
        "event_end": None,
        "registration_start": None,
        "registration_end": None,
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": None,
        "city": None,
        "reg_link": None,
        "main_link": None
    },
    {
        "hack_name": "Татар.Бу Хакатон",
        "description": "Описание Татар.Бу Хакатон",
        "event_start": datetime(2023, 9, 8),
        "event_end": datetime(2023, 9, 10),
        "registration_start": None,
        "registration_end": datetime(2023, 9, 5),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн",
        "city": None,
        "reg_link": "https://kazandigitalweek.com/ru/sign-up-hackathon",
        "main_link": "https://kazandigitalweek.com/ru/site/events/33"
    },
    {
        "hack_name": "Арт Вселенная",
        "description": "Описание Арт Вселенная",
        "event_start": datetime(2023, 9, 13),
        "event_end": datetime(2023, 9, 14),
        "registration_start": None,
        "registration_end": datetime(2023, 8, 10),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн/Очно",
        "city": None,
        "reg_link": "https://kazandigitalweek.com/ru/sign-up-hackathon",
        "main_link": "https://kazandigitalweek.com/ru/site/events/34"
    },
    {
        "hack_name": "Цифровой прорыв (НН)",
        "description": "Описание Цифровой прорыв (НН)",
        "event_start": datetime(2023, 9, 8),
        "event_end": datetime(2023, 9, 10),
        "registration_start": None,
        "registration_end": datetime(2023, 8, 4),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн/Оффлайн",
        "city": "Нижний Новгород",
        "reg_link": "https://hacks-ai.ru/",
        "main_link": "https://hacks-ai.ru/"
    },
    {
        "hack_name": "UrbanCode",
        "description": "Описание UrbanCode",
        "event_start": datetime(2023, 9, 13),
        "event_end": datetime(2023, 10, 14),
        "registration_start": None,
        "registration_end": datetime(2023, 9, 13),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн/Оффлайн",
        "city": None,
        "reg_link": "https://changellenge.com/championships/urbancode/#reg",
        "main_link": "https://changellenge.com/championships/urbancode/"
    },
    {
        "hack_name": "VTB API Hackathon",
        "description": "Описание VTB API Hackathon",
        "event_start": datetime(2023, 10, 7),
        "event_end": datetime(2023, 10, 21),
        "registration_start": None,
        "registration_end": datetime(2023, 10, 1),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн, Финал Очно в МСК",
        "city": "Москва",
        "reg_link": "https://codenrock.com/auth?reg_on_contest=1007#/register",
        "main_link": "https://vtbapihack.ru/#timeline"
    },
    {
        "hack_name": "USETECH Hackathon",
        "description": "Описание USETECH Hackathon",
        "event_start": datetime(2023, 9, 30),
        "event_end": datetime(2023, 10, 1),
        "registration_start": None,
        "registration_end": datetime(2023, 9, 25),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Оффлайн",
        "city": None,
        "reg_link": "https://www.zavodit.ru/ru/calendar/event/35",
        "main_link": "https://usetechhack.ru/"
    },
    {
        "hack_name": "На севере — кодить!",
        "description": "Описание На севере — кодить!",
        "event_start": datetime(2023, 9, 15),
        "event_end": datetime(2023, 9, 23),
        "registration_start": None,
        "registration_end": datetime(2023, 9, 11),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people":random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн/Оффлайн",
        "city": None,
        "reg_link": "https://xn--c1ad6a.xn--80aegcbawovqtiw4l.xn--p1ai/logIn",
        "main_link": "https://xn--80aegcbawovqtiw4l.xn--p1ai/?utm_source=rh&utm_medium=tgpost&utm_campaign=anons1"
    },
    {
        "hack_name": "Цифра2023",
        "description": "Описание Цифра2023",
        "event_start": datetime(2023, 9, 20),
        "event_end": datetime(2023, 11, 30),
        "registration_start": None,
        "registration_end": datetime(2023, 9, 20),
        "tag": ", ".join(random.sample(tags, random.randint(1, len(tags)))),
        "amount_of_people": random.randint(3, 10),
        "price": random.uniform(10.0, 100.0),
        "format": "Онлайн",
        "city": None,
        "reg_link": "https://www.cifra2023.ru/",
        "main_link": "https://www.cifra2023.ru/"
    }
]

# Вставка данных в таблицу "hack"
for hackathon in hackathons:
    cur.execute("""
        INSERT INTO hacks (hack_name, description, event_start, event_end, registration_start, registration_end,  tag, amount_of_people, price, format, city, reg_link, main_link)
        VALUES (%(hack_name)s, %(description)s, %(event_start)s, %(event_end)s, %(registration_start)s,  %(registration_end)s, %(tag)s, %(amount_of_people)s, %(price)s, %(format)s, %(city)s, %(reg_link)s, %(main_link)s)
    """, hackathon)

# Применяем изменения к базе данных
conn.commit()

# Список имен для генерации случайных имен
names = ["Иван", "Анна", "Алексей", "Елена", "Дмитрий", "Ольга", "Максим", "Наталья", "Андрей", "Светлана"]
stacks = ["Python", "Java", "C++", "JavaScript", "Ruby", "C#", "Go", "Kotlin", "Swift"]
tg_links = ["https://t.me/user1", "https://t.me/user2", "https://t.me/user3"]
github_links = ["https://github.com/user1", "https://github.com/user2", "https://github.com/user3"]
request_types = ["team", "group", "member", "question"]

# Генерация случайных данных
requests = []
for i in range(20):
    name = random.choice(names)
    stack = ", ".join(random.sample(stacks, random.randint(1, len(stacks))))
    tg = random.choice(tg_links)

    github_link = random.choice(github_links)
    request_type = random.choice(request_types)
    job = random.choice(jobs)
    user_tags = random.sample(tags, random.randint(1, len(tags)))
    team_id = random.randint(1, 5)  # Ваша логика для team_id
    status = "pending"  # По умолчанию статус "ожидание"
    question = ""  # Пустой вопрос для начала
    year = 2023
    random_date = datetime(year, randint(1, 12), randint(1, 28), randint(0, 23), randint(0, 59), randint(0, 59))

    # Если тип заявки "question", добавьте случайный вопрос
    if request_type == "question":
        question = "Вопрос по техподдержке: " + ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(20))

    request_data = {
        "name": name,
        "stack": stack,
        "job": job,
        "tg": tg,
        "github_link": github_link,
        "type": request_type,
        "team_id": team_id,
        "status": status,
        "tag": ", ".join(user_tags),
        "question": question,
        "create_date": random_date
    }
    requests.append(request_data)

for request_data in requests:
    cur.execute("""
        INSERT INTO requests (name, stack, job, tg, github_link, type, team_id, tag, status, question, create_date)
        VALUES (%(name)s, %(stack)s, %(tg)s, %(job)s, %(github_link)s, %(type)s, %(team_id)s, %(tag)s, %(status)s, %(question)s, %(create_date))
    """, request_data)
conn.commit()
conn.close()












