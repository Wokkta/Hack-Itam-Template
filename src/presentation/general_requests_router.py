from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import sys
import os
from script import *

script_dir = os.path.dirname(os.path.abspath(__file__))
script_path = os.path.join(script_dir, "script.py")

if script_path not in sys.path:
    sys.path.append(script_path)

from script import (
    add_data,
    delete_data,
    update_data,
    get_all_data
)

app = FastAPI()

class Item(BaseModel):
    name: list
    description: str

# API-маршруты для CRUD операций (пример)
@app.post("/create/{table_name}", response_model=Item)
async def create_item(table_name: str, item: Item):
    add_data(table_name, item.dict())
    return item

@app.delete("/delete/{table_name}/{column_name}/{value}")
async def delete_item(table_name: str, column_name: list, value: list):
    delete_data(table_name, column_name, value)
    return {"message": "Deleted"}

@app.put("/update/{table_name}/{column_name}/{value}", response_model=Item)
async def update_item(table_name: str, column_name: list, value: list, item: Item):
    update_data(table_name, item.dict(), column_name, value)
    return item

@app.get("/get/{table_name}", response_model=List[Item])
async def get_all_items(table_name: str):
    items = get_all_data(table_name)
    return items
