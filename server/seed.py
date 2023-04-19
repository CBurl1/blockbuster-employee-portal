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
    m4 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m5 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m6 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m7 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m8 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m9 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m10 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m11 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m12 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m13 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m14 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m15 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m16 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m17 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m18 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m19 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m20 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m21 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m22 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m23 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m24 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m25 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m26 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m27 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m28 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m29 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m30 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m31 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m32 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m33 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
    m34 = Movie(name='Lord of the Ring The Fellowship of the Ring', cost=2.99, rating='PG-13')
       
    movies = [m1, m2, m3, m4, m5, m6, m7,
              m8, m9, m10, m11, m12, m13, m14,
              m15, m16, m17, m18, m19, m20, m21,
              m22, m23, m24, m25, m26, m27, m28,
              m29, m30, m31, m32, m33, m34]

    print('Creating Client...')
    c1 = Client(first_name='Dakota', last_name='Vikdal', age=26)
    c2 = Client(first_name='Collin', last_name='Burleigh', age=23)
    c3 = Client(first_name='Mason', last_name='Parks', age=33)
    c4 = Client(first_name='Mason', last_name='Parks', age=33)
    c5 = Client(first_name='Mason', last_name='Parks', age=33)
    c6 = Client(first_name='Mason', last_name='Parks', age=33)
    c7 = Client(first_name='Mason', last_name='Parks', age=33)
    c8 = Client(first_name='Mason', last_name='Parks', age=33)
    c9 = Client(first_name='Mason', last_name='Parks', age=33)
    c10 = Client(first_name='Mason', last_name='Parks', age=33)
    c11 = Client(first_name='Mason', last_name='Parks', age=33)
    c12 = Client(first_name='Mason', last_name='Parks', age=33)
    c13 = Client(first_name='Mason', last_name='Parks', age=33)
    c14 = Client(first_name='Mason', last_name='Parks', age=33)
    c15 = Client(first_name='Mason', last_name='Parks', age=33)
    c16 = Client(first_name='Mason', last_name='Parks', age=33)
    c17 = Client(first_name='Mason', last_name='Parks', age=33)
    c18 = Client(first_name='Mason', last_name='Parks', age=33)
    c19 = Client(first_name='Mason', last_name='Parks', age=33)
    c20 = Client(first_name='Mason', last_name='Parks', age=33)
    c21 = Client(first_name='Mason', last_name='Parks', age=33)
    c22 = Client(first_name='Mason', last_name='Parks', age=33)
    c23 = Client(first_name='Mason', last_name='Parks', age=33)
    c24 = Client(first_name='Mason', last_name='Parks', age=33)
    c25 = Client(first_name='Mason', last_name='Parks', age=33)
    c26 = Client(first_name='Mason', last_name='Parks', age=33)
    c27 = Client(first_name='Mason', last_name='Parks', age=33)
    c28 = Client(first_name='Mason', last_name='Parks', age=33)
    c29 = Client(first_name='Mason', last_name='Parks', age=33)
    c30 = Client(first_name='Mason', last_name='Parks', age=33)
    c31 = Client(first_name='Mason', last_name='Parks', age=33)
    c32 = Client(first_name='Mason', last_name='Parks', age=33)
    c33 = Client(first_name='Mason', last_name='Parks', age=33)
    c34 = Client(first_name='Mason', last_name='Parks', age=33)
    c35 = Client(first_name='Mason', last_name='Parks', age=33)
    c36 = Client(first_name='Mason', last_name='Parks', age=33)
    c37 = Client(first_name='Mason', last_name='Parks', age=33)
    c38 = Client(first_name='Mason', last_name='Parks', age=33)
    c39 = Client(first_name='Mason', last_name='Parks', age=33)
    c40 = Client(first_name='Mason', last_name='Parks', age=33)
    c41 = Client(first_name='Mason', last_name='Parks', age=33)
    c42 = Client(first_name='Mason', last_name='Parks', age=33)
    c43 = Client(first_name='Mason', last_name='Parks', age=33)
    c44 = Client(first_name='Mason', last_name='Parks', age=33)
    c45 = Client(first_name='Mason', last_name='Parks', age=33)
    c46 = Client(first_name='Mason', last_name='Parks', age=33)
    
    clients = [c1, c2, c3, c4, c5, c6, c7,
              c8, c9, c10, c11, c12, c13, c14,
              c15, c16, c17, c18, c19, c20, c21,
              c22, c23, c24, c25, c26, c27, c28,
              c29, c30, c31, c32, c33, c34, c35,
              c36, c37, c38, c39, c40, c41, c42,
              c43, c44, c45, c46]

    print('Creating Rental')
    r1 = Rental(movie_id= 7, client_id= 1)
    r2 = Rental(movie_id= 13, client_id= 2)
    r3 = Rental(movie_id= 17, client_id= 3)
    r4 = Rental(movie_id= 5, client_id= 4)
    r5 = Rental(movie_id= 34, client_id= 5)
    r6 = Rental(movie_id= 11, client_id= 6)
    r7 = Rental(movie_id= 23, client_id= 7)
    r8 = Rental(movie_id= 24, client_id= 8)
    r9 = Rental(movie_id= 33, client_id= 9)
    r10 = Rental(movie_id= 30, client_id= 10)
    r11 = Rental(movie_id= 31, client_id= 11)
    r12 = Rental(movie_id= 25, client_id= 12)
    r13 = Rental(movie_id= 26, client_id= 13)
    r14 = Rental(movie_id= 19, client_id= 14)
    r15 = Rental(movie_id= 4, client_id= 15)
    r16 = Rental(movie_id= 15, client_id= 16)
    r17 = Rental(movie_id= 16, client_id= 17)
    r18 = Rental(movie_id= 22, client_id= 18)
    r19 = Rental(movie_id= 27, client_id= 19)
    r20 = Rental(movie_id= 29, client_id= 20)
    r21 = Rental(movie_id= 21, client_id= 21)
    r22 = Rental(movie_id= 27, client_id= 22)
    r23 = Rental(movie_id= 28, client_id= 23)
    r24 = Rental(movie_id= 1, client_id= 24)
    r25 = Rental(movie_id= 2, client_id= 25)
    r26 = Rental(movie_id= 8, client_id= 26)
    r27 = Rental(movie_id= 11, client_id= 27)
    r28 = Rental(movie_id= 12, client_id= 28)
    r29 = Rental(movie_id= 18, client_id= 29)
    r30 = Rental(movie_id= 14, client_id= 30)
    r31 = Rental(movie_id= 3, client_id= 31)
    r32 = Rental(movie_id= 9, client_id= 32)
    r33 = Rental(movie_id= 10, client_id= 33)
    r34 = Rental(movie_id= 20, client_id= 34)
    r35 = Rental(movie_id= 18, client_id= 35)
    r36 = Rental(movie_id= 13, client_id= 36)
    r37 = Rental(movie_id= 2, client_id= 37)
    r38 = Rental(movie_id= 10, client_id= 38)
    r39 = Rental(movie_id= 30, client_id= 39)
    r40 = Rental(movie_id= 24, client_id= 40)
    r41 = Rental(movie_id= 28, client_id= 41)
    r42 = Rental(movie_id= 13, client_id= 42)
    r43 = Rental(movie_id= 29, client_id= 43)
    r44 = Rental(movie_id= 9, client_id= 44)
    r45 = Rental(movie_id= 31, client_id= 45)
    r46 = Rental(movie_id= 1, client_id= 46)
    
    rentals = [r1, r2, r3, r4, r5, r6, r7,
              r8, r9, r10, r11, r12, r13, r14,
              r15, r16, r17, r18, r19, r20, r21,
              r22, r23, r24, r25, r26, r27, r28,
              r29, r30, r31, r32, r33, r34]

    db.session.add_all(movies)
    db.session.add_all(clients)
    db.session.add_all(rentals)
    db.session.commit()

    print('Seeding Done!')