from Database.poll import CreatePoll, UpdatePoll, FetchAll, FetchOne, FetchMyPolls
from Database.poll import FetchVoteInfo
from flask import jsonify
import json
import bson
from datetime import datetime
def CreatePollService(data):
    try:
        likes = 0
        votes = []
        for i in range(len(data["options"])):
            votes.append(0)
        data["likes"] = likes
        data["votes"] = votes
        data["createdAt"] = datetime.now()
        response = CreatePoll(data)
        return response
    except Exception as e:
        print(f"An error occurred: {e}")
        return e


def UpdatePollService(data, id):
    try:
        update_object = {"$set" : data}
        response = UpdatePoll(update_object, id)
        return response
    except Exception as e:
        print(f"An error occurred in service: {e}")
        return e
    
def FetchAllPollService():
    try:
        polls = FetchAll()
        return polls
    except Exception as e:
        print(e)
        return e
    
def FetchOnePollService(pollId):
    try:
        poll = FetchOne(pollId)
        return poll
    except Exception as e:
        print(e, "error in service")
        return e
    
def FetchVoteInfoService(pollId, userId):
    try:
        response = FetchVoteInfo(pollId, userId)
        return response
    except Exception as e:
        print(e)
        return e
    
def FetchMyPollsService(userId):
    try:
        polls = FetchMyPolls(userId)
        return polls
    except Exception as e:
        print(e)
        return e