from Config.database.db import polls_collection
from Config.database.db import votes_collection
from bson.objectid import ObjectId
def CreatePoll(poll_dict):
    try:
        polls_collection.insert_one(poll_dict)
        return "The poll has been created successfully."
    except Exception as e:
        print("database")
        print("Error creating new poll in database: ", e.message)
        return e
    
def UpdatePoll(poll, id):
    try:
        polls_collection.update_one({"_id" : ObjectId(id)}, poll)
        return "The poll has been updated successfully."
    except Exception as e:
        print("Error updating poll in database: ", e)
        return e
    
def FetchAll():
    try:
        polls = polls_collection.find({"public" : 1})
        results = []
        for poll in polls:
            results.append(poll)
        print(polls)
        for poll in results:
            poll["_id"] = str(poll["_id"])
            poll["createdAt"] = poll["createdAt"].strftime("%Y-%m-%d %H:%M:%S")
        return results
    except Exception as e:
        print(e)
        return e

def FetchOne(name):
    print(name)
    try:
        poll = polls_collection.find_one(
        {"$text": {"$search": name}},
        {"score": {"$meta": "textScore"}}
        )
        poll["_id"] = str(poll["_id"])
        poll["createdAt"] = poll["createdAt"].strftime("%Y-%m-%d %H:%M:%S")
        print(poll, "this is poll")
        return poll
    except Exception as e:
        print(e, "error in database")
        return e
    
def FetchVoteInfo(pollId, userId):
    try:
        voteinfo = votes_collection.find_one({
            "userId" : userId,
            "pollId" : pollId
        })
        if(not voteinfo):
            return {}
        
        voteinfo["_id"] = str(voteinfo["_id"])
        return voteinfo
    except Exception as e:
        print(e)
        return e

def FetchMyPolls(userId):
    try:
        polls = polls_collection.find({"userId" : userId})
        results = []
        for poll in polls:
            results.append(poll)
        for poll in results:
            poll["_id"] = str(poll["_id"])
            poll["createdAt"] = poll["createdAt"].strftime("%Y-%m-%d %H:%M:%S")
        return results
    except Exception as e:
        print(e)
        return e
        