import uuid
from Config.database.db import users_collection
def GetUserId():
    try:
        uu = uuid.uuid4()
        users_collection.insert_one({"userId" : uu})
        return uu
    except Exception as e:
        print(e)
        return e