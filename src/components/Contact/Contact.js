import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';

const Styles = styled.div`

`;

class Contact extends React.Component {

    render() {

        return (
            <Styles>
                <Container fluid style={{height:"100vh"}}>
                    <h3>Contact</h3>
                </Container>
            </Styles>
        );
    }
}

export default Contact;

