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
    def get(self):
        return 'spaceballs!'

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
    
    def post(self):
        data = request.get_json()
        movie = Movie(name = data['name'],
                      cost = data['cost'],
                      rating = data['rating'])
        db.session.add(movie)
        db.session.commit()
        return make_response(movie.to_dict(), 201)
    
api.add_resource(Movies, '/movies')

class MoviesById( Resource ):
    def get(self, id):
        m_instance = Movie.query.filter_by( id = id).first()
        if m_instance == None:
            return make_response( {'error': 'movie not found'}, 404)
        return make_response(m_instance.to_dict(), 200)

    def patch(self, id):
        m = Movie.query.filter_by( id = id ).first()
        if m == None:
            return make_response({'error': 'Movie Not Found.'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(m, key, data[key])
        db.session.add(m)
        db.session.commit()
        return make_response(m.to_dict(), 200)
    
    def delete(self, id):
        m_instance = Movie.query.filter_by(id=id).first()
        if m_instance == None:
            return make_response({'error':'Movie Not Found'}, 404)
        db.session.delete(m_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(MoviesById, '/movies/<int:id>')

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
class GetRentalsById(Resource):
    def get(self, id):
        r_instance = Rental.query.filter_by(id=id).first()
        if r_instance == None:
            return make_response({'error': 'Rental Not Found'}, 404)
        return make_response(r_instance.to_dict(), 200)

    def patch(self, id):
        r = Rental.query.filter_by(id=id).first()
        if r == None:
            return make_response({'error': 'Rental Not Found'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(r, key, data[key])
        db.session.add(r)
        db.session.commit()
        return make_response(r.to_dict(), 200)
    
api.add_resource(GetRentalsById, '/rentals/<int:id>')
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
    
    def post(self):
        data = request.get_json()
        client = Client(first_name = data['first_name'],
                        last_name = data['last_name'],
                        age = data['age'])
        db.session.add(client)
        db.session.commit()
        return make_response(client.to_dict(), 201)
    
api.add_resource(Clients, '/clients')

class GetClientsById(Resource):
    def get(self, id):
        c_instance = Client.query.filter_by( id = id).first()
        if c_instance == None:
            return make_response( {'error': 'Client Not Found'}, 404)
        return make_response(c_instance.to_dict(), 200)
    
    def patch(self, id):
        c = Client.query.filter_by(id=id).first()
        if c == None:
            return make_response({'error': 'Client Not Found'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(c, key, data[key])
        db.session.add(c)
        db.session.commit()
        return make_response(c.to_dict(), 200)
    
    def delete(self, id):
        c_instance = Client.query.filter_by(id=id).first()
        if c_instance == None:
            return make_response({'error': 'Client Not Found'}, 404)
        db.session.delete(c_instance)
        db.session.commit()
        return make_response({},204)
    
api.add_resource(GetClientsById, '/clients/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)