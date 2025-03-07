from flask import Blueprint

api_route = Blueprint('api', __name__)

from Controllers.poll import poll
from Controllers.user import user
from Controllers.vote import vote
api_route.register_blueprint(poll, url_prefix = 'poll')
api_route.register_blueprint(user, url_prefix = 'user')
api_route.register_blueprint(vote, url_prefix = 'vote')