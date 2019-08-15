import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';

const Styles = styled.div`

`;

class About extends React.Component {

    render() {

        return (
            <Styles>
                <Container fluid style={{height:"100vh"}}>
                    <h3>About</h3>
                    <Row>
                        <Col>
                            <img />
                        </Col>
                    </Row>
                </Container>
            </Styles>
        );
    }
}

export default About;

