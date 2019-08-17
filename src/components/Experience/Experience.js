import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';

const Styles = styled.div`

`;

class Experience extends React.Component {

    render() {

        return (

            <Container fluid style={{ padding: '50px 0px'}}>
                <Styles>
                    <Col xs={{span: 10, offset: 1}}>
                    <h2 className='text-center'>Experience</h2>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    </Col>
                </Styles>
            </Container>

        );
    }
}

export default Experience;

