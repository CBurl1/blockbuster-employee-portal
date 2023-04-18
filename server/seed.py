#!/usr/bin/env python3

# Standard library imports
# from random import randint, choice as rc
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Remote library imports
# from faker import Faker

# Local imports
from app import app
from models import db, Movie, Rental, Client

with app.app_context():
    # print('Deleting data...')
    # Movie.query.delete()
    # Rental.query.delete()
    # Client.query.delete()
    print('Creating Movie...')
    m1 = Movie(name='Jaws', cost=2.99, rating='R')
    m2 = Movie(name='Top Gun', cost=2.99, rating='PG')
    m3 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    movies = [m1, m2, m3]

    print('Creating Client...')
    c1 = Client(first_name='Dakota', last_name='Vikdal', age=26)
    c2 = Client(first_name='Collin', last_name='Burleigh', age=23)
    c3 = Client(first_name='Mason', last_name='Parks', age=33)
    clients = [c1, c2, c3]

    print('Creating Rental')
    r1 = Rental(movie_id= 1, client_id= 3)
    r2 = Rental(movie_id= 2, client_id= 2)
    r3 = Rental(movie_id= 3, client_id= 1)
    rentals = [r1, r2, r3]

    db.session.add_all(movies)
    db.session.add_all(clients)
    db.session.add_all(rentals)
    db.session.commit()

    print('Seeding Done!')