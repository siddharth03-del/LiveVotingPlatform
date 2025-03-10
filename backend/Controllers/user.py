from flask import Blueprint, jsonify, request
from Service.users import GetUserIdService, CreateFeedbackService
user = Blueprint('user', __name__)

@user.route('/uuid', methods=['GET'])
def get_userId():
    try:
        uuId = GetUserIdService()
        return jsonify({
            "success" : True,
            "userId" : uuId
        }), 200
    except Exception as e:
        return jsonify({
            "success" : False,
            "message" : "Somthing went wrong"
        }), 400
        
@user.route('/feedback', methods=['POST'])
def create_feedback():
    try:
        form = request.json
        name = form.get('name')
        email = form.get('email')
        message = form.get('message')
        response = CreateFeedbackService(name, email,message)
        return jsonify({
            "success" : True,
            "message" : response
        }), 201
    except Exception as e:
        print(e)
        return jsonify({
            "success" : False,
            "message" : "Something went wrong"
        }), 400