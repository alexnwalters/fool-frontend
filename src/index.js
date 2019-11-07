import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import App from './App';
import NotFound from './routes/NotFound/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path={'/'}
                component={App}
            />
            <Route
                component={NotFound}
            />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
