import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

import LandingSite from './components/Home/LandingSite';
import Home from './components/Home/Home';


function App() {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LandingSite}/>
                    <Route exact path="/home" component={Home}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
