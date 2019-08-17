import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
import history from './history';

import LandingSite from './components/Home/LandingSite';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavigationBar from "./components/Header/NavigationBar";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";


function App() {

    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={LandingSite}/>
                </Switch>
                <Container fluid>
                    <Row>
                        <NavigationBar/>
                        <Col>
                            <Switch>
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/skill" component={Skills}/>
                                <Route exact path="/experience" component={Experience}/>
                                <Route exact path="/project" component={Project}/>
                                <Route exact path="/contact" component={Contact}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </React.Fragment>
    );
}

export default App;
