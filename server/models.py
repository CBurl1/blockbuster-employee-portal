from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    rating = db.Column(db.String, nullable=False)
    
    rentals = db.relationship('Rental', backref='movies')

    @validates('rating')
    def validate_rating(self, key, rating):
        ratings = ['G', 'PG', 'PG-13', 'R']
        if rating not in ratings:
            raise ValueError('Rating Must be G, PG, PG-13, R')
        return rating
    
class Rental(db.Model, SerializerMixin):
    __tablename__ = 'rentals'

    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))

class client(db.Model, SerializerMixin):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)

    rentals = db.relationship('Rental', backref='client')
    # clients = association_proxy('', 'client')



# Models go here!

