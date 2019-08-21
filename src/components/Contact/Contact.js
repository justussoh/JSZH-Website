import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';

import './Contact.css'

const Styles = styled.div`
    .font-color{
        color:white;
    }
    
    .font-title{
        color:#08fdd8;
        font-weight: bold;
    }
`;

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        focus: false,
    };

    handleName = (e) => {
        this.setState({name: e.target.value})
    };
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    };
    handleSubject = (e) => {
        this.setState({subject: e.target.value})
    };
    handleMessage = (e) => {
        this.setState({message: e.target.value})
    };
    handleFocus = (e) => {
        this.setState({focus: true})
    };
    handleBlur = (e) => {
        this.setState({focus: false})
    };


    render() {
        return (
            <Container fluid style={{height: '100vh', backgroundColor: "#252627"}}
                       className='d-flex justify-content-center align-items-center'>
                <Styles style={{width: '100%'}}>
                    <Col xs={{span: 10, offset: 1}}>
                        <Row>
                            <Col xs={12} md={6} className='d-flex align-items-start justify-content-center flex-column'>
                                <Col>
                                    <h2 className='font-title'>Contact Me</h2>
                                    <p className='font-color'>If you have any questions, don't hesitate to contact me
                                        with the form below</p>
                                </Col>
                                <div>
                                    <Row>
                                        <Col>
                                    <span className="input input--nao">
                                        <input className="input__field input__field--nao" type="text" id="input-1"
                                               onChange={this.handleName}/>
                                        <label
                                            className={this.state.name !== '' ? "input__label input__label--nao input__label--nao--filled" : "input__label input__label--nao"}
                                            htmlFor="input-1">
                                            <span className="input__label-content input__label-content--nao">Name</span>
                                        </label>
                                        <svg className="graphic graphic--nao" width="300%" height="100%"
                                             viewBox="0 0 1200 60"
                                             preserveAspectRatio="none">
                                            <path
                                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
                                        </svg>
				                    </span>
                                        </Col>
                                        <Col>
                                        <span className="input input--nao">
                                        <input className="input__field input__field--nao" type="text" id="input-4" onChange={this.handleEmail}/>
                                        <label
                                            className={this.state.email !== '' ? "input__label input__label--nao input__label--nao--filled" : "input__label input__label--nao"}
                                            htmlFor="input-4">
                                            <span
                                                className="input__label-content input__label-content--nao">Email</span>
                                        </label>
                                        <svg className="graphic graphic--nao" width="300%" height="100%"
                                             viewBox="0 0 1200 60"
                                             preserveAspectRatio="none">
                                            <path
                                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
                                        </svg>
				                    </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                    <span className="input input--nao">
                                        <input className="input__field input__field--nao" type="text" id="input-2" onChange={this.handleSubject}/>
                                        <label
                                            className={this.state.subject !== '' ? "input__label input__label--nao input__label--nao--filled" : "input__label input__label--nao"}
                                            htmlFor="input-2">
                                            <span
                                                className="input__label-content input__label-content--nao">Subject</span>
                                        </label>
                                        <svg className="graphic graphic--nao" width="300%" height="100%"
                                             viewBox="0 0 1200 60"
                                             preserveAspectRatio="none">
                                            <path
                                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
                                        </svg>
                                    </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                    <span className="input input--nao">
                                        <textarea rows="4" className="input__field input__field--nao" id="input-3"
                                                  onChange={this.handleMessage} onFocus={this.handleFocus}
                                                  onBlur={this.handleBlur}/>
                                        <label
                                            className={(this.state.message !== '' || this.state.focus) ? "input__label input__label--nao input__label--nao--filled" : "input__label input__label--nao"}
                                            htmlFor="input-3">
                                            <span
                                                className="input__label-content input__label-content--nao">Message</span>
                                        </label>
                                        <svg className="graphic graphic--nao" width="300%" height="100%"
                                             viewBox="0 0 1200 60"
                                             preserveAspectRatio="none">
                                            <path
                                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
                                        </svg>
                                    </span>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={false} md={6}>

                            </Col>
                        </Row>
                    </Col>
                </Styles>
            </Container>
        );
    }
}

export default Contact;

