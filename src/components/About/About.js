import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";

const Styles = styled.div`
    .font-color{
        color:white;
        
    }
    
    .font-title{
        color:#08fdd8;
        font-weight: bold;
    }
`;

class About extends React.Component {

    state = {
        isLoading: true,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000)
    }

    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:
                return (
                    <Container fluid style={{height: '100vh', backgroundColor: "#252627"}}
                               className='d-flex justify-content-center align-items-center'>
                        <Styles>
                            <Col xs={{span: 10, offset: 1}}>
                                <Row>
                                    <Col xs={false} md={6}>
                                        <img src='/images/about.jpg' alt='about' style={{width: '100%'}}/>
                                    </Col>
                                    <Col xs={12} md={6}
                                         className='d-flex align-items-start justify-content-center flex-column'>
                                        <h2 className='font-title'>About Me</h2>
                                        <p className='font-color'>I am currently a Year 2 Business Analytics Student in
                                            the National University of
                                            Singapore, School of Computing. I have a keen interest in programming and
                                            statistics. I am looking for an internship position at a organization to
                                            utilize the
                                            education qualifications in Business Analytics and Computing.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Styles>
                    </Container>
                );
        }
    };

    render() {
        return (
            <SwitchTransition>
                <CSSTransition key={this.state.isLoading}
                               timeout={600}
                               classNames='page'
                >
                    {this.renderContent()}
                </CSSTransition>
            </SwitchTransition>
        )
    }
}

export default About;

