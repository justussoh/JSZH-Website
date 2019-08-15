import React from 'react';
import history from '../../history';
import styled from 'styled-components';

import {Nav, Navbar} from 'react-bootstrap';

import { Link, animateScroll as scroll } from 'react-scroll';

const Styles = styled.div`
    .Navbar-brand, .Navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
    
    .nav-bar{
        padding: 15px 50px;
    }
    
    .nav-item{
        font-family: 'Roboto';
        font-weight: bold;
    }
`;

class NavigationBar extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop({duration:300});
    }

    render() {

        return (
            <Styles>
                <Navbar expand="lg" fixed='top' className='nav-bar'>
                    <Navbar.Brand onClick={this.scrollToTop}><img src='/images/logo.png' alt='logo' style={{height:'70px',width:"70px"}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link activeClass="focused" to="about" spy={true} smooth={true} offset={-100} duration= {300}><Nav.Link href="#about">About</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link activeClass="focused" to="experience" spy={true} smooth={true} offset={-100} duration= {300}><Nav.Link href="#experience">Experience</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link activeClass="focused" to="project" spy={true} smooth={true} offset={-100} duration= {300}><Nav.Link href="#project">Project</Nav.Link></Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link activeClass="focused" to="contact" spy={true} smooth={true} offset={-100} duration= {300}><Nav.Link href="#contact">Contact</Nav.Link></Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }
}

export default NavigationBar;

