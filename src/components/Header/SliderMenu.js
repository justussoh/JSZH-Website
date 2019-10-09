import {push as Menu} from 'react-burger-menu';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MediaQuery from 'react-responsive';
import CloseIcon from '@material-ui/icons/Close'
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';

import './SliderMenu.css'
import history from "../../history";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class SliderMenu extends Component {

    handleLogoClick = () => {
        history.push('/home');
        this.props.handleCloseMenu();
    };

    handleLinkin = () => {
        window.open('https://www.linkedin.com/in/justussoh/', '_blank')
    };

    handleGithub = () => {
        window.open('https://github.com/justussoh', '_blank')
    };

    render() {
        return (
            <MediaQuery maxWidth={425}>
                <Menu pageWrapId={"page-wrap"} outerContainerId={"root"}
                      customBurgerIcon={false} isOpen={this.props.open}
                      onStateChange={(state) => this.props.handleMenuStateChange(state)}
                      customCrossIcon={false} className='menu-width'
                >
                    <Grid container spacing={3}
                    >
                        <Grid item xs={12} className='d-flex align-items-center'>
                            <img onClick={this.handleLogoClick} src='/images/logo-1.png' alt={''}
                                 style={{width: 40, height: 'auto'}}/>
                            <IconButton className='closeButtonMenu ml-auto' onClick={this.props.handleCloseMenu}>
                                <CloseIcon className='closeIconMenu'/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/home" className="sidebar-link"
                                     onClick={this.props.handleCloseMenu}>01. Home</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/about" className="sidebar-link"
                                     onClick={this.props.handleCloseMenu}>02. About</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/skill" className="sidebar-link"
                                     onClick={this.props.handleCloseMenu}>03. Skill</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/experience" className="sidebar-link"
                                     onClick={this.props.handleCloseMenu}>04. Experience</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/contact" className="sidebar-link" onClick={this.props.handleCloseMenu}>05. Contact
                                Me</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider variant='middle' style={{backgroundColor: '#fcbd0b'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <span className='navi-font'>
                                I am a data analyst, full stack web developer and also a student from the
                                National University of Singapore pursing a bachelor’s degree in business
                                analytics.
                            </span>
                        </Grid>
                        <Grid item xs={12}>
                            <p className='navi-font'>
                                <a href='mailto:justus.soh@u.nus.edu' className='navi-font'>
                                    justus.soh@u.nus.edu
                                </a>
                            </p>
                        </Grid>
                        <Grid item xs={12} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faLinkedin} className='icon' onClick={this.handleLinkin}/>
                            <FontAwesomeIcon icon={faGithub} className='icon' onClick={this.handleGithub}/>
                        </Grid>

                    </Grid>
                </Menu>
            </MediaQuery>
        )

    }
}

export default SliderMenu;
