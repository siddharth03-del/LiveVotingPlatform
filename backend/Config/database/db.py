from pymongo import MongoClient
from bson.codec_options import CodecOptions, UuidRepresentation
import os

client = MongoClient(os.getenv('DATABASE_URL'), UuidRepresentation = 'standard')
db = client.get_database('VotingPlatform')
polls_collection = db.get_collection('polls')
votes_collection = db.get_collection('votes')
users_collection = db.get_collection('users')