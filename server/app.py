#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource


# Local imports
from config import app, db, api
from models import Movie, Rental, Client

# Views go here!
class Home(Resource):
    pass 

api.add_resource(Home, '/')
class Movies(Resource):
    def get(self):
        m_list = []
        for m in Movie.query.all():
            m_dict = {
                'id': m.id,
                'name': m.name,
                'cost': m.cost,
                'rating': m.rating
            }
            m_list.append(m_dict)
        return make_response(m_list, 200)
    
api.add_resource(Movies, '/movies')
    
class Rentals(Resource):
    def get(self):
        r_list = []
        for r in Rental.query.all():
            r_dict = {
                'id': r.id,
                'movie_id': r.movie_id,
                'client_id': r.client_id,
                'checkout_date': r.checkout_date,
                'return_date': r.return_date
            }
            r_list.append(r_dict)
        return make_response(r_list, 200)
    
api.add_resource(Rentals, '/rentals')
class Clients(Resource):
    def get(self):
        c_list = []
        for c in Client.query.all():
            c_dict = {
                'first_name': c.first_name,
                'last_name': c.last_name,
                'age': c.age
            }
            c_list.append(c_dict)
        return make_response(c_list, 200)
    
api.add_resource(Clients, '/clients')

if __name__ == '__main__':
    app.run(port=5555, debug=True)