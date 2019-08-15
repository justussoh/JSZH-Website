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
                <Container fluid style={{height:"80vh", padding: '30px 0px' }}>
                    <Col xs={{span:10, offset:1}}>
                    <Row>
                        <Col xs={false} md={6}>
                            <img src='/images/about.jpg' alt='about' style={{width:'100%'}}/>
                        </Col>
                        <Col xs={12} md={6} className='d-flex align-items-start justify-content-center flex-column'>
                            <h2>About Me</h2>
                            <p>I am currently a Year 2 Business Analytics Student in the National University of Singapore, School of Computing. I have a keen interest in programming and statistics. I am looking for an internship position at a organization to utilize the education qualifications in Business Analytics and Computing.</p>
                        </Col>
                    </Row>
                    </Col>
                </Container>
            </Styles>
        );
    }
}

export default About;

