from pymongo import MongoClient
from bson.codec_options import CodecOptions, UuidRepresentation
client = MongoClient("mongodb+srv://siddharthsingh9361:GLPGF3rQWkAj73tw@cluster0.phh1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", UuidRepresentation='standard')
db = client.get_database('VotingPlatform')
polls_collection = db.get_collection('polls')
votes_collection = db.get_collection('votes')
users_collection = db.get_collection('users')