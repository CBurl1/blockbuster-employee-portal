from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

convention = {
  "ix": "ix_%(column_0_label)s",
  "uq": "uq_%(table_name)s_%(column_0_name)s",
  "ck": "ck_%(table_name)s_%(constraint_name)s",
  "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
  "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)


class BlockBuster(db.Model, SerializerMixin):
    __tablename__ = 'blockbusters'

    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String)

    movies = db.relationship('Movie', backref='blockbuster')
    # renters = association_proxy('', 'renter')


class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    rating = db.Column(db.String, nullable=False)
    blockbuster_id = db.Column(db.Integer, db.ForeignKey('blockbusters.id'))
    
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
    renter_id = db.Column(db.Integer, db.ForeignKey('renters.id'))

class Renter(db.Model, SerializerMixin):
    __tablename__ = 'renters'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer, nullable=False)

    rentals = db.relationship('Rental', backref='renter')
    # renters = association_proxy('', 'renter')



# Models go here!

