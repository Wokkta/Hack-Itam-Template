import psycopg2
import json

# Подключение к базе данных
connection = psycopg2.connect(
    host="your_host",
    database="your_database",
    user="your_user",
    password="your_password"
)
cursor = connection.cursor()


# Функция для добавления данных в таблицу
def add_data(table_name, data):
    insert_query = f"INSERT INTO {table_name} ({', '.join(data.keys())}) VALUES ({', '.join(['%s'] * len(data))})"
    cursor.execute(insert_query, list(data.values()))
    connection.commit()


# Функция для удаления данных из таблицы по условию
def delete_data(table_name, column_name, value):
    delete_query = f"DELETE FROM {table_name} WHERE {column_name} = %s"
    cursor.execute(delete_query, (value,))
    connection.commit()


# Функция для обновления данных в таблице по условию
def update_data(table_name, data, column_name, value):
    update_query = f"UPDATE {table_name} SET {', '.join([f'{key} = %s' for key in data.keys()])} WHERE {column_name} = %s"
    cursor.execute(update_query, list(data.values()) + [value])
    connection.commit()


# Функция для извлечения всех данных из таблицы и возврата в формате JSON
def get_all_data(table_name):
    select_query = f"SELECT * FROM {table_name}"
    cursor.execute(select_query)
    data = cursor.fetchall()

    # Преобразование данных в формат JSON
    data_json = []
    for row in data:
        row_dict = dict(zip([desc[0] for desc in cursor.description], row))
        data_json.append(row_dict)

    return json.dumps(data_json)

# data_to_insert = {
#     "name": "John",
#     "age": 30,
#     "city": "New York"
# }
# add_data("example_table", data_to_insert)
#
# # Удаление данных
# delete_data("example_table", "name", "John")
#
# # Обновление данных
# data_to_update = {
#     "age": 31,
#     "city": "Los Angeles"
# }
# update_data("example_table", data_to_update, "name", "John")
#
# # Извлечение всех данных в формате JSON
# all_data_json = get_all_data("example_table")
# print(all_data_json)

connection.close()
