import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Styles = styled.div`

`;

class Home extends React.Component {

    render() {

        return (
            <Styles>
                <Container fluid style={{marginTop:100}}>
                    <Row id='about'>
                        <About />
                    </Row>
                    <Row id='experience'>
                        <Experience />
                    </Row>
                    <Row id='project'>
                        <Project />
                    </Row>
                    <Row id='contact'>
                        <Contact />
                    </Row>
                </Container>
            </Styles>
        );
    }
}

export default Home;

