import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row, Nav} from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import BarIcon from '@material-ui/icons/BarChart';
import ExploreIcon from '@material-ui/icons/Explore';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';


const Styles = styled.div`
    .bottom{
        position: absolute;
        bottom: 20px;
        width: 60px;
        text-align: center;
        display: block;
        padding: 0;
        list-style: none;
        margin:0;
    }
    
    .nav-bar{
        background-color:#181818;
        width:60px;
        height: 100vh;
        padding: 0 10px;
    }
     
      
    .outer-container {
      position: relative;
      width: 100%;
      margin: 8px 0px;
    }
    
    .icon {
      display: block;
      width: 70%;
      height: auto;
      color:#4d4d4e;
      transition: .3s ease;
    }
    
    .outer-container:hover .icon {
        color:#08fdd8;
    }
    
    .active{
        color:#08fdd8;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color:#181818;
      
    }
    
    .outer-container:hover .overlay {
      opacity: .9;
    }
    
    .inner-text {
      color:#08fdd8;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      cursor:pointer;
    }

`;

class NavigationBar extends React.Component {

    state = {
        location:'/home'
    };

    componentDidMount() {
        this.setState({location:window.location.pathname})
    }

    render() {

        return (
            <Styles>
                <nav className="d-flex flex-column justify-content-center align-items-center nav-bar">
                    <Row onClick={() => {
                        this.setState({location:'/home'});
                        history.push('/home')
                    }}
                         className='outer-container d-flex align-content-center justify-content-center'>
                        <HomeIcon className={this.state.location === '/home' ? 'active icon' : 'icon'}/>
                        <div className="overlay">
                            <div className="inner-text">Home</div>
                        </div>
                    </Row>
                    <Row onClick={() => {
                        this.setState({location:'/about'});
                        history.push('/about')
                    }}
                         className='outer-container d-flex align-content-center justify-content-center'>
                        <PersonIcon className={this.state.location === '/about' ? 'active icon' : 'icon'}/>
                        <div className="overlay">
                            <div className="inner-text">About</div>
                        </div>
                    </Row>
                    <Row onClick={() => {
                        this.setState({location:'/skill'});
                        history.push('/skill')
                    }}
                         className='outer-container d-flex align-content-center justify-content-center'>
                        <BarIcon className={this.state.location === '/skill' ? 'active icon' : 'icon'}/>
                        <div className="overlay">
                            <div className="inner-text">Skill</div>
                        </div>
                    </Row>
                    <Row onClick={() => {
                        this.setState({location:'/experience'});
                        history.push('/experience')
                    }}
                         className='outer-container d-flex align-content-center justify-content-center'>
                        <WorkIcon className={this.state.location === '/experience' ? 'active icon' : 'icon'} />
                        <div className="overlay">
                            <div className="inner-text">Experience</div>
                        </div>
                    </Row>
                    <Row onClick={() => {
                        this.setState({location:'/project'});
                        history.push('/project')
                    }}
                         className='outer-container d-flex align-content-center justify-content-center'>
                        <ExploreIcon className={this.state.location === '/project' ? 'active icon' : 'icon'}/>
                        <div className="overlay">
                            <div className="inner-text">Project</div>
                        </div>
                    </Row>
                    <Row onClick={() => {
                        this.setState({location:'/contact'});
                        history.push('/contact')
                    }}
                         className='bottom'>
                        <div className='outer-container d-flex align-content-center justify-content-center'
                             style={{padding: "0 10px"}}>
                            <MailIcon className={this.state.location === '/contact' ? 'active icon' : 'icon'}/>
                            <div className="overlay">
                                <div className="inner-text">Contact</div>
                            </div>
                        </div>
                    </Row>
                </nav>
            </Styles>
        );
    }
}

export default NavigationBar;

