from flask import Flask, request,jsonify
from flask_socketio import SocketIO,send, emit
from flask_cors import CORS
from dotenv import load_dotenv
import os
import eventlet
eventlet.monkey_patch()

app = Flask(__name__)
load_dotenv()
app.config['SECKRET_KEY'] = 'Siddharthsingh'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5173))
    socketio.run(app, host='0.0.0.0', port=port)
from Routes.api.api import api_route
from Service.vote import CasteVoteService


app.register_blueprint(api_route, url_prefix='/api')

@app.route('/ping')
def index():
    return "ping"

@socketio.on('connect')
def new_connection():
    print("New connection established")
    send({"message": "New connection established"})

@socketio.on("cast_vote")
def casteVoteHandler(json):
    from Controllers.vote import CastVote
    try:
        response = CastVote(json)
        emit('poll_update', response, broadcast=True, include_self=False)
    except Exception as e:
        print(e)
        send({"message" : "There was an error casting vote"})

@socketio.on("remove_vote")
def removeVoteHandler(json):
    from Controllers.vote import RemoveVote
    try:
        print(json)
        response = RemoveVote(json)
        print(response)
        emit('poll_update', response, broadcast=True, include_self=False)
    except Exception as e:
        print("Error in handler of remove vote" ,e)
        send({"message" : "There was an error removing vote"})

