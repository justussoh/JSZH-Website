import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
import history from './history';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LandingSite from './components/Home/LandingSite';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavigationBar from "./components/Header/NavigationBar";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

import './App.css';
import Loading from "./components/Loading/Loading";

function App() {

    return (
        <React.Fragment>
            <Router history={history}>
                <Container fluid className='container-main'>
                    <Row>
                        <Switch>
                            <Route exact path="/" component={''}/>
                            <Route component={NavigationBar}/>
                        </Switch>
                        <Col style={{padding:0}}>
                            <Route render={({location}) => (
                                <TransitionGroup>
                                    <CSSTransition key={location.key}
                                                   timeout={60000}
                                                   classNames='page'
                                    >
                                        <Switch location={location}>
                                            <Route exact path="/" component={LandingSite}/>
                                            <Route exact path="/home" component={Home}/>
                                            <Route exact path="/about" component={About}/>
                                            <Route exact path="/skill" component={Skills}/>
                                            <Route exact path="/experience" component={Experience}/>
                                            <Route exact path="/project" component={Project}/>
                                            <Route exact path="/contact" component={Contact}/>
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            )} />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </React.Fragment>
    );
}

export default App;
