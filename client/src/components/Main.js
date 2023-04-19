import React from 'react';
import Movie from './Movie';
import Header from './Header';
import Home from './Home';
import Rental from './Rental';
import Client from './Client';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path= '/client' component={Client}/>
                <Route path= '/rental' component={Rental}/>
                <Route path= '/movie' component={Movie}/>
                <Route path= '/' component={Home}/>
                <Redirect to= '/' />
            </Switch>
        </div>
    )
}

export default withRouter(Main);