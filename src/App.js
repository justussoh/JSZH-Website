import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
import history from './history';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import LandingSite from './components/Home/LandingSite';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavigationBar from "./components/Header/NavigationBar";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import SliderMenu from "./components/Header/SliderMenu";

import './App.css';
import Loading from "./components/Loading/Loading";
import {SnackbarProvider} from "notistack";


class App extends Component {

    state = {
        openMenu: false,
    };

    handleOpenMenu = () => {
        this.setState({openMenu: true});
    };

    handleCloseMenu = () => {
        this.setState({openMenu: false});
    };

    handleMenuStateChange = (state) => {
        this.setState({openMenu: state.isOpen})
    };

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <SliderMenu open={this.state.openMenu} handleCloseMenu={this.handleCloseMenu}
                                handleMenuStateChange={this.handleMenuStateChange}/>
                    <Container fluid className='container-main' id='page-wrap'>
                        <Row>
                            <Switch>
                                <Route exact path="/" component={''}/>
                                <Route render={(props) => <NavigationBar {...props}
                                                                         handleOpenMenu={this.handleOpenMenu}/>}/>
                                {/*<Route component={NavigationBar}/>*/}
                            </Switch>
                            <Col style={{padding: 0}}>
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
                                                <Route exact path="/experience" render={(props) => {
                                                    return (
                                                        <SnackbarProvider maxSnack={3}
                                                                          anchorOrigin={{
                                                                              vertical: 'bottom',
                                                                              horizontal: 'right',
                                                                          }}
                                                                          hideIconVariant={true}
                                                        >
                                                            <Experience {...props}/>
                                                        </SnackbarProvider>
                                                    );
                                                }}/>
                                                <Route exact path="/project" component={Project}/>
                                                <Route exact path="/contact" component={Contact}/>
                                            </Switch>
                                        </CSSTransition>
                                    </TransitionGroup>
                                )}/>
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
