import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import {Chart} from "react-google-charts";
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";

const data = [
    [
        'Skill',
        'Level',
        {role: 'style'},
    ],
    ['R', 76, '#fcbd0b'],
    ['Python', 80, '#fcbd0b'],
    ['Making Tea', 99, '#fcbd0b'],
    ['JavaScipt', 70, '#fcbd0b'],
    ['Tableau', 77, '#fcbd0b'],
];

const Styles = styled.div`
    .font{
        color:white;
    }
    
    .font-title{
        color:#fcbd0b;
        font-weight: bold;
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
        window.setTimeout(() => this.setState({isLoading: false}), 1000)
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
                        <Styles>
                            <Col xs={{span: 10, offset: 1}}>
                                <Row>
                                    <Col xs={12} md={5}>
                                        <h1 className='font-title'>SKILLS</h1>
                                        <p className='font'>
                                            The main area of my expertise is in Data Analytics (Descriptive, Prescriptive and Predictive Analytics) using R and Python. In addition, I can also do Data Visualization using Tableau to transform data into a more readable format to gain better insight.
                                        </p>
                                        <p className='font'>I am also skilled in Data Management on relational databases like mySQL and non-relational like MongoDB.</p>
                                        <p className='font'>I can also do full stack web development (HTML, CSS and JavaScript), familiar with MERN stack.</p>
                                        <p className='font'> I also have knowledge in using Illustrator, Photoshop, InDesign and XD for design. And am fluent in spoken and written English and Chinese.</p>
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
                                    </Col>
                                    <Col xs={12} md={7}>
                                        <Chart
                                            chartType="ColumnChart"
                                            width="100%"
                                            height="100%"
                                            data={data}
                                            options={{
                                                legend: 'none',
                                                animation: {
                                                    startup: true,
                                                    easing: 'linear',
                                                    duration: 1500,
                                                },
                                                backgroundColor: 'none',
                                                hAxis: {
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

