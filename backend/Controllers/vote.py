from Service.vote import CasteVoteService, StoreVoteService, RemoveVoteService, ChangeStoredVoteService, FetchMyVoteService
from flask import jsonify, request, Blueprint
from flask_socketio import send, emit
from Database.vote import VoteExists

vote = Blueprint("vote" , __name__)

@vote.route('/myvotes', methods=["GET"])
def FetchMyVoteController():
    try:
        userId = request.args.get('userId')
        response = FetchMyVoteService(userId)
        print(response)
        return jsonify({
            "success" : True,
            "data" : response
        }), 200
    except Exception as e:
        print(e)
        return jsonify({
            "success" : False,
            "message" : e
        }), 400


def CastVote(json):
    try:
        print(json)
        pollId = json["pollId"]
        vote = json["vote"]
        userId = json["userId"]
        votefound = VoteExists({"userId" : userId, "pollId" : pollId})
        if(votefound):
            print("the vote exists in the database")
            response = ChangeStoredVoteService(pollId, userId, vote)
            previousVote = response['vote']
            res = CasteVoteService(pollId=pollId, userId=userId, previousVote=previousVote, vote=vote)
        else:
            response = StoreVoteService(userId, pollId, vote)
            res = CasteVoteService(pollId=pollId, userId=userId, vote=vote)
        return ({"message" : res})
    except Exception as e:
        print("Error in castvote controller", e)
        return ({"message" : response})

def RemoveVote(json):
    try:
        pollId = json["pollId"]
        vote = json["vote"]
        userId = json["userId"]
        votefound = VoteExists({"userId" : userId, "pollId" : pollId})
        if(not votefound):
            print("vote doesn't exist")
            return ({"message" : "vote doesn't exist"})
        r = RemoveVoteService(pollId, userId, vote)
        return ({"message" : r})
    except Exception as e:
        print("Error in rmeovevote controller", e)
        return ({"message" : "Something went wrong"})