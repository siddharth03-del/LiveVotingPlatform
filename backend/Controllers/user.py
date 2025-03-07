from flask import Blueprint, jsonify
from Service.users import GetUserIdService
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