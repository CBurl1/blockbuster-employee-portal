# Standard library imports

# Remote library imports
from flask import Flask, request, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData


# Local imports
from models import db, BlockBuster, Movie, Rental, Renter

# Instantiate app, set attributes
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

# Views go here!
# class Movies(Resource):
#     def get(self):
#         m_list = []
#         for m in Movie.query.all

if __name__ == '__main__':
    app.run(port=5555, debug=True)
