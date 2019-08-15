import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import About from "../About/About";

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
                </Container>
            </Styles>
        );
    }
}

export default Home;

