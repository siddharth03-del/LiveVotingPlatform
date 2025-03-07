from Database.user import GetUserId
def GetUserIdService():
    try:
        uuid = GetUserId()
        return uuid
    except Exception as e:
        print(e)
        return e