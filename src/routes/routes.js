import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link , BrowserRouter,Switch} from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import Dashboard from '../containers/Dashboard/Dashboard';


const Routes =  props => (
    
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            
        </Switch>
 
);

export default Routes;