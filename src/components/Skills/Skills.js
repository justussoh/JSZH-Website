import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import {Chart} from "react-google-charts";
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";
import MediaQuery from "react-responsive";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import WOW from "wow.js";

const dataAnalytics = [
    [
        'Skill',
        'Level',
        {role: 'style'},
    ],
    ['Data Visualisation', 85, '#fcbd0b'],
    ['Predictive Modeling', 80, '#fdca3c'],
    ['Data Manipulation', 77, '#fdd154'],
    ['Computer Vision', 60, '#fdd76d'],
    ['Optimization', 55, '#fee59d'],
];

const dataProg = [
    [
        'Skill',
        'Level',
        {role: 'style'},
    ],
    ['JavaScipt', 90, '#fcbd0b'],
    ['Java', 85, '#fdca3c'],
    ['HTML/CSS/JSX', 84, '#fdd154'],
    ['Python', 80, '#fdd76d'],
    ['R', 76, '#fee59d'],
];

const Styles = styled.div`
    .font{
        color:white;
       
    }
    
    .font-title{
        color:#fcbd0b;
        font-weight: bold;
        font-size:28px;
        text-align:center;
    }
    
    .font-subtitle{
        color:#fcbd0b;
        font-weight: bold;
        font-size:14px;
        text-align:center;
    }
    
    .font-link{
        color:#fcbd0b;
        text-decoration:underline;
        cursor:pointer;
    }

`;

class Skills extends React.Component {

    state = {
        isLoading: true,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000);
        const wow = new WOW();
        wow.init();
    }

    handleClick = () => {
        history.push('/contact')
    };

    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:

                return (
                    <Container fluid style={{height: '100vh'}}
                               className='d-flex justify-content-center align-items-center'>
                        <Styles style={{width: '70vw'}}>
                            <Col xs={{span: 11, offset: 0}}>
                                <Row>
                                    <Col xs={12} md={3} className='d-flex justify-content-center align-items-center' >
                                        <Typist className='font-title' startDelay={1250}>
                                            WHAT I CAN DO
                                        </Typist>
                                    </Col>
                                    <Col xs={12} md={9}>
                                        <Row>
                                            <Col xs={12} md={3}
                                                 className='d-flex justify-content-center align-items-center'>
                                                <h6 className='font wow fadeIn' data-wow-delay='1s'
                                                    data-wow-offset='20'>
                                                    PROGRAMMING SKILLS
                                                </h6>
                                            </Col>
                                            <Col xs={12} md={9}>
                                                <Chart
                                                    chartType="BarChart"
                                                    width="100%"
                                                    height="40vh"
                                                    data={dataProg}
                                                    options={{
                                                        legend: 'none',
                                                        animation: {
                                                            startup: true,
                                                            easing: 'linear',
                                                            duration: 1250,
                                                        },
                                                        backgroundColor: 'none',
                                                        hAxis: {
                                                            minValue: 0,
                                                            maxValue: 100,
                                                            baselineColor: '#fff',
                                                            gridlines: {
                                                                count: 0
                                                            },
                                                            textStyle: {
                                                                color: '#fff'
                                                            },
                                                        },
                                                        vAxis: {
                                                            minValue: 0,
                                                            textStyle: {
                                                                color: '#fff'
                                                            },
                                                            baselineColor: '#fff'
                                                        },
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12} sm={3}
                                                 className='d-flex justify-content-center align-items-center'>
                                                <h6 className='font wow fadeIn' data-wow-delay='1s'
                                                    data-wow-offset='20'>
                                                    DATA ANALYTICS SKILLS
                                                </h6>
                                            </Col>
                                            <Col xs={12} sm={9}>
                                                <Chart
                                                    chartType="BarChart"
                                                    width="100%"
                                                    height="35vh"
                                                    data={dataAnalytics}
                                                    options={{
                                                        legend: 'none',
                                                        animation: {
                                                            startup: true,
                                                            easing: 'linear',
                                                            duration: 1250,
                                                        },
                                                        backgroundColor: 'none',
                                                        hAxis: {
                                                            minValue: 0,
                                                            maxValue: 100,
                                                            baselineColor: '#fff',
                                                            gridlines: {
                                                                count: 0
                                                            },
                                                            textStyle: {
                                                                color: '#fff'
                                                            },
                                                        },
                                                        vAxis: {
                                                            minValue: 0,
                                                            textStyle: {
                                                                color: '#fff'
                                                            },
                                                            baselineColor: '#fff'
                                                        },
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <p className='font'>Visit my <a href='https://www.linkedin.com/in/justussoh/'
                                                                    target='_blank'
                                                                    className='font-link'>LinkedIn</a>, <a
                                        href='https://github.com/justussoh' target='_blank'
                                        className='font-link'>Github</a> or <a
                                        href='https://public.tableau.com/profile/justus.soh#!/'
                                        target='_blank' className='font-link'>Tableau</a> profiles for more details,
                                        or
                                        just <span
                                            onClick={this.handleClick} className='font-link'>contact</span> me! </p>
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

export default Skills;

