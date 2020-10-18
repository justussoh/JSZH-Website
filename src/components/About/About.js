import React from 'react';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import WOW from "wow.js";
import MediaQuery from "react-responsive";

const Styles = styled.div`
    .font-color{
        color:#fff;
        
    }
    
    .font-title{
        color:#fcbd0b;
        font-weight: bold;
        font-size:28px;
    }
`;

class About extends React.Component {

    state = {
        isLoading: true,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000)
        const wow = new WOW();
        wow.init();
    }

    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:
                return (
                    <Container fluid style={{height: '100vh'}}
                               className='d-flex justify-content-center align-items-center'>
                        <Styles>
                            <Col xs={{span: 10, offset: 1}}>
                                <Row>
                                    <MediaQuery minWidth={426}>
                                        <Col xs={false} md={6}
                                             className='d-flex align-items-center justify-content-center'>
                                            <img src='/images/about.jpg' alt='about' style={{width: '100%'}}
                                                 className='wow fadeIn' data-wow-delay='1.25s'
                                                 data-wow-offset='20'/>
                                        </Col>
                                    </MediaQuery>
                                    <Col xs={12} md={6}
                                         className='d-flex align-items-start justify-content-center flex-column'>
                                        <Typist startDelay={1250} className="MyTypist">
                                            <span className='font-title'>MORE ABOUT ME</span>
                                        </Typist>
                                        <p className='font-color wow fadeIn' data-wow-delay='1.25s'
                                           data-wow-offset='20'>
                                            I am a data analyst, full stack web developer and also a student from the
                                            National University of Singapore pursing a bachelor’s degree in business
                                            analytics.
                                        </p>
                                        <Typist startDelay={1250} className="MyTypist">
                                            <span className='font-title'>I AM LOOKING FOR</span>
                                        </Typist>
                                        <p className='font-color wow fadeIn' data-wow-delay='1.25s'
                                           data-wow-offset='20'>
                                            I am currently pursuing a full time internship program at San Francisco,
                                            California from January 2020 onwards, particularly in the area of data
                                            analysis and software development. Through the internship program, I hope to
                                            be challenged and stretched in ways that results in personal and
                                            professional progress. I also wish to learn alongside others and be given
                                            the opportunity to take ownership of my work. Finally, I would also like to
                                            interact with my colleagues and learn more about their culture.
                                        </p>

                                        {/*<h2 className='font-title'> More About Me</h2>*/}
                                        {/*<p >I am currently a Year 2 Business Analytics Student in*/}
                                        {/*    the National University of*/}
                                        {/*    Singapore, School of Computing. I have a keen interest in programming and*/}
                                        {/*    statistics. I am looking for an internship position at a organization to*/}
                                        {/*    utilize the*/}
                                        {/*    education qualifications in Business Analytics and Computing.</p>*/}
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

