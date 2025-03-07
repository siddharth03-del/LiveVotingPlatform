from Database.vote import CasteVote
from Database.vote import StoreVote, RemoveVote, ChangeStoredVote, FetchMyVotes
def CasteVoteService(**kwargs):
    try:
        try:
            previousVote = False
            previousVote = kwargs["previousVote"]
        except Exception as e:
            print(e)
        vote = kwargs["vote"]
        pollId = kwargs["pollId"]
        if(previousVote):
            response = CasteVote(vote=vote, pollId=pollId, previousVote=previousVote)
        else:
            response = CasteVote(vote=vote, pollId=pollId)
    
        return response
    except Exception as e:
        print(f"Error processing CasteVote : {e}")


def StoreVoteService(userId, pollId, vote):
    try:
        data = {"userId" : userId, "pollId" : pollId, "vote" : vote}
        response = StoreVote(data)
        return response
    except Exception as e:
        print(f"Error storing vote: {e}")
        return e
    
def RemoveVoteService(pollId, userId, vote):
    try:
        data = {"userId" : userId, "pollId" : pollId, "vote" : vote}
        response = RemoveVote({"userId" : userId, "pollId" : pollId, "vote" : vote})
        return response
    except Exception as e:
        print(f"Error removing vote in vote sevice: {e}")
        return e

def ChangeStoredVoteService(pollId, userId, vote):
    try:
        data = {"vote" : vote, "pollId" : pollId, "userId" : userId}
        response = ChangeStoredVote(data)
        return response
    except Exception as e:
        print("Error changing stored vote service: ", e)
        return e
        
def FetchMyVoteService(userId):
    try:
        response = FetchMyVotes(userId)
        print(response)
        return response
    except Exception as e:
        print(e)
        return e