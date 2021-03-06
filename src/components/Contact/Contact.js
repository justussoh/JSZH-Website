import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import './Contact.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";

const API_PATH = '/api/contact/index.php';


const Styles = styled.div`
    .font-color{
        color:white;
    }
    
    .font-title{
        color:#fcbd0b;
        font-weight: bold;
    }
    
    .mapboxgl-ctrl-logo{
        display: none !important;
    }
    
    .MuiButton-label{
        font-family: "Open Sans",sans-serif !important;
        letter-spacing: 3px;
    }
    
    .submit-button{
        border-radius:0px !important;
        margin: 15px 15px;
        width:100%;
        border: 2px solid #92989e !important;
        color: #92989e !important;
        
        &:hover{
            background-color: #fcbd0b !important;
            color: #252627 !important;
            border: 2px solid #fcbd0b !important;
        }
        
        &:active{
            background-color: #fcbd0b !important;
            color: #252627 !important;
            border: 2px solid #fcbd0b !important;
        }        
    }
`;


class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        mailSent: false,
        error: null,
        focus: false,
        viewport: {
            width: '100%',
            height: '100%',
            latitude: 1.351616,
            longitude: 103.808053,
            zoom: 10
        },
        isLoading: true,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000)
    }

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

    handleFormSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            }
        }).then(result => {
            this.setState({
                mailSent: result.data.sent,name: '',
                email: '',
                subject: '',
                message: '',
            });
        }).catch(error => this.setState({error: error.message}))
        this.setState({
            mailSent: true,
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    SlideTransition = (props) => {
        return <Slide {...props} direction="up"/>
    };

    handleSnackBarClose = () => {
        this.setState({mailSent: false})
    };


    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:
                return (
                    <Container fluid
                               style={{height: '100vh', padding: 0, overflow: 'hidden'}}
                               className='d-flex justify-content-center align-items-center'>
                        <Styles style={{width: '100%', height: '100%'}}>
                            <Row style={{height: '100%'}}>
                                <Col xs={{span: 9, offset: 1}} md={{span: 6, offset: 3}}
                                     className='d-flex align-items-start justify-content-center flex-column'>

                                    <div style={{padding: 15}}>
                                        <h2 className='font-title'>Contact Me</h2>
                                        <p className='font-color'>If you have any questions, don't hesitate to contact
                                            me at <a href="mailto:justus.soh@u.nus.edu"
                                                     style={{color: '#fcbd0b'}}>justus.soh@u.nus.edu</a> or <a
                                                style={{color: '#fcbd0b'}} href="tel:+6584815984">+6584816984</a> or
                                            with the form below</p>
                                    </div>
                                    <div>
                                        <Row>
                                            <Col>
                                    <span className="input input--nao">
                                        <input className="input__field input__field--nao" type="text" id="input-1"
                                               onChange={this.handleName} value={this.state.name}/>
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
                                        <input className="input__field input__field--nao" type="text" id="input-4"
                                               onChange={this.handleEmail} value={this.state.email}/>
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
                                        <input className="input__field input__field--nao" type="text" id="input-2"
                                               onChange={this.handleSubject} value={this.state.subject}/>
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
                                                  onBlur={this.handleBlur} value={this.state.message}/>
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
                                                <Button variant="outlined" className='submit-button'
                                                        onClick={this.handleFormSubmit}>SUBMIT</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                {/*<Col xs={false} md={{span: 6, offset: 1}}>*/}
                                {/*    <ReactMapGL*/}
                                {/*        {...this.state.viewport}*/}
                                {/*        onViewportChange={(viewport) => this.setState({viewport})}*/}
                                {/*        mapboxApiAccessToken={MAPBOX_TOKEN}*/}
                                {/*        mapStyle={'mapbox://styles/justussoh/cjzkz0evc02sv1cozec2q5cjs'}*/}
                                {/*    />*/}
                                {/*</Col>*/}
                            </Row>
                            <Snackbar anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                      open={this.state.mailSent}
                                      message={<span id="message-id">Message has been sent!</span>}
                                      action={
                                          <IconButton
                                              key="close"
                                              color="inherit"
                                              onClick={this.handleSnackBarClose}
                                          >
                                              <CloseIcon/>
                                          </IconButton>
                                      }
                                      TransitionComponent={this.SlideTransition}
                            />
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

export default Contact;

