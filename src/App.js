import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

import LandingSite from './components/Home/LandingSite';
import Home from './components/Home/Home';
import NavigationBar from "./components/Header/NavigationBar";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LandingSite}/>
                </Switch>
                <NavigationBar />
                <Switch>
                    <Route exact path="/home" component={Home}/>
                </Switch>
                <Footer />
            </Router>
        </React.Fragment>
    );
}

export default App;
