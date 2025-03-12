from flask import Blueprint, request, jsonify
from Service.poll import CreatePollService, UpdatePollService, FetchAllPollService, FetchOnePollService, FetchVoteInfoService, FetchMyPollsService
import json
from urllib.parse import unquote
poll = Blueprint('poll', __name__)
@poll.route('/create', methods=['POST'])
def CreatePollController():
    try:
        formdata = request.json
        print(formdata)
        name = formdata.get('name')
        description = formdata.get('description')
        options = formdata.get('options')
        colour = formdata.get('colour')
        author_name = formdata.get('author_name')
        emailId = formdata.get('emailId')
        userId = formdata.get('userId')
        public = int(formdata.get('public'))
        data = {"public" : public,"userId" : userId, "name" : name, "description" : description, "author_name" : author_name, "emailId" : emailId, "colour" : colour, "author_name" : author_name, "options" : options}
        response = CreatePollService(data)
        return jsonify({"message" : response}), 201
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 400
    

@poll.route('/update', methods=['POST'])
def UpdatePollController():
    try:
        updates = request.form.get("raw")
        id = request.form.get('_id')
        update_data = json.loads(updates)
        print(update_data)
        print(id)
        response = UpdatePollService(update_data, id)
        return jsonify({"message" : response}), 200
    except Exception as e:
        print(f"An error occured in controller{e}")
        return jsonify({"error": str(e)}), 400
    

@poll.route("/all", methods=["GET"])
def FetchAllPollController():
    try:
        response = FetchAllPollService()
        return jsonify({
            "success" : True,
            "data" : response
        }), 200
    except Exception as e:
        print(e)
        return jsonify({
            "success" : False,
            "message" : "something went wrong"
        }), 400
    

@poll.route("/getone", methods=["GET"])
def FetchOnePollController():
    try:
        pollname = request.args.get("poll_name")
        pollname = unquote(pollname)
        print(pollname)
        response = FetchOnePollService(pollname)
        return jsonify({
            "success" : True,
            "data" : response
        }), 200
    except Exception as e:
        print(e, "error in controller")
        return jsonify({
            "success" : False,
            "message" : "something went wrong"
        }), 400

@poll.route("/voteinfo", methods=["GET"])
def FetchVoteInfoController():
    try:
        pollId = request.args.get("poll_id")
        userId = request.args.get("user_id")
        print(pollId, userId)
        response = FetchVoteInfoService(pollId, userId)
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
        
@poll.route("/mypolls", methods=["GET"])
def FetchMyPollsController():
    try:
        userId = request.args.get("userId")
        response = FetchMyPollsService(userId)
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
