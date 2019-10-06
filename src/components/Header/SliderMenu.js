import {push as Menu} from 'react-burger-menu';
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import MediaQuery from 'react-responsive';
import CloseIcon from '@material-ui/icons/Close'
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

import './SliderMenu.css'
import history from "../../history";

class SliderMenu extends Component {

    handleLogoClick = () =>{
        history.push('/home');
        this.props.handleCloseMenu();
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
                            <img onClick={this.handleLogoClick} src='/images/logo-1.png' alt={''} style={{width: 40, height: 'auto'}}/>
                            <IconButton className='closeButtonMenu ml-auto' onClick={this.props.handleCloseMenu}>
                                <CloseIcon className='closeIconMenu'/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/home" className="sidebar-link" onClick={this.props.handleCloseMenu}>Home</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/about" className="sidebar-link" onClick={this.props.handleCloseMenu}>About</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/skill" className="sidebar-link" onClick={this.props.handleCloseMenu}>Skill</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/experience" className="sidebar-link" onClick={this.props.handleCloseMenu}>Experience</NavLink>
                        </Grid>
                        <Grid item xs={12}>
                            <NavLink to="/contact" className="sidebar-link" onClick={this.props.handleCloseMenu}>Contact Me</NavLink>
                        </Grid>

                    </Grid>
                </Menu>
            </MediaQuery>
        )

    }
}

export default SliderMenu;
