import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";

const Styles = styled.div`

`;

class Home extends React.Component {

    render() {

        return (
            <Styles>
                <Container fluid style={{height:"100vh"}}>
                    <Row>
                        <About />
                    </Row>
                    <Row>
                        <Experience />
                    </Row>
                    <Row>
                        <Project />
                    </Row>
                </Container>
            </Styles>
        );
    }
}

export default Home;

