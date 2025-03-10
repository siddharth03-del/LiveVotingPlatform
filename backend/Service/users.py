from Database.user import GetUserId, CreateFeedback
def GetUserIdService():
    try:
        uuid = GetUserId()
        return uuid
    except Exception as e:
        print(e)
        return e
    
def CreateFeedbackService(name, email, message):
    try:
        response = CreateFeedback(name, email, message)
        return response
    except Exception as e:
        print(e)
        return e