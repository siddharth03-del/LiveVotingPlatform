import uuid
from Config.database.db import users_collection, feedback_collection
def GetUserId():
    try:
        uu = uuid.uuid4()
        users_collection.insert_one({"userId" : uu})
        return uu
    except Exception as e:
        print(e)
        return e
    
def CreateFeedback(name, email, message):
    try:
        feedback_collection.insert_one({"name" : name, "email" : email, "message" : message})
        return "Feedback created successfully."
    except Exception as e:
        print(e)
        return e