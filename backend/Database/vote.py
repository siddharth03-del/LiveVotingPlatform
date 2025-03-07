from Config.database.db import polls_collection
from Config.database.db import votes_collection
from bson.objectid import ObjectId
from flask import json
def CasteVote(**kwargs):
    try:
        try:
            previousVote = False
            previousVote = kwargs["previousVote"]
        except Exception as e:
            print(e)
        vote = kwargs["vote"]
        pollId = kwargs["pollId"]
        
        poll_data = polls_collection.find_one({"_id" : ObjectId(pollId)})
        print("The data server fetched from database during castevote" ,poll_data)
        for i in range(len(poll_data["options"])):
            if poll_data["options"][i] == vote:
                poll_data["votes"][i] += 1
                break
        if(previousVote):
            for i in range(len(poll_data["options"])):
                if poll_data["options"][i] == previousVote:
                    poll_data["votes"][i] -= 1
                    break
        new_votes = poll_data["votes"]
        print(new_votes)
        polls_collection.update_one({"_id" : ObjectId(pollId)}, {"$set" : {"votes" : new_votes}})
        poll_data["_id"] = str(poll_data["_id"])
        poll_data["createdAt"] = poll_data["createdAt"].strftime("%Y-%m-%d %H:%M:%S")
        print("The data server maniuplated to store on db after castvote",poll_data)
        return {"Sucess" : True, "Poll" : poll_data}
    except Exception as e:
        print(f"Error casting votes in database : {e}")
        return e
    

def StoreVote(data):
    try:
        votes_collection.insert_one(data)
        return "Success"
    except Exception as e:
        print(f"Error storing vote in database : {e}")
        return e
    
def VoteExists(data):
    try:
        f =  votes_collection.find_one(data)
        if(f):
            return True
        else:
            return False
    except Exception as e:
        print("error in vote exitst",e)
        return e
    
def RemoveVote(data):
    try: 
        votes_collection.find_one_and_delete({"userId" : data["userId"], "pollId" : data["pollId"]})
        print("delted the vote form vote collection")
        poll_data = polls_collection.find_one({"_id" : ObjectId(data["pollId"])})
        print("The data server fetched form db during remove vote",poll_data)
        for i in range(len(poll_data["options"])):
            if poll_data["options"][i] == data["vote"]:
                poll_data["votes"][i] -= 1
                break
        new_votes = poll_data["votes"]
        print(new_votes)
        polls_collection.update_one({"_id" : ObjectId(data["pollId"])}, {"$set" : {"votes" : new_votes}})
        new_poll = polls_collection.find_one({"_id" : ObjectId(data["pollId"])})
        new_poll["_id"] = str(new_poll["_id"])
        new_poll["createdAt"] = new_poll["createdAt"].strftime("%Y-%m-%d %H:%M:%S")
        print("The data server manipulated to store on db after remove vote",new_poll)
        return {"Sucess" : True, "Poll" : new_poll}
    except Exception as e:
        print("an error occured in database of remove vote", e)
        
def ChangeStoredVote(data):
    try:
        response = votes_collection.find_one_and_update({"pollId" : data["pollId"], "userId" : data["userId"]}, {"$set" : {"vote" : data["vote"]}})
        return response
    except Exception as e:
        print("an error occured in database change stored vote", e)
        
def FetchMyVotes(userId):
    print(userId)
    try:
        pipeline = [
    {
        '$match': {'userId': userId}
    },
    {
        '$addFields': {
            'pollId': {'$toObjectId': '$pollId'}
        }
    },
    {
        '$lookup': {
            'from': 'polls',
            'localField': 'pollId',
            'foreignField': '_id',
            'as': 'poll_info'
        }
    },
    {
        '$unwind': '$poll_info'
    },
    {
        '$project': {
            'vote': 1,
            'poll_name': '$poll_info.name'
        }
    }
]
        votes = votes_collection.aggregate(pipeline)
        results = []
        for poll in votes:
            results.append(poll)
        for poll in results:
            poll["_id"] = str(poll["_id"])
        print(results)
        return results
    except Exception as e:
        print(e)
        return e