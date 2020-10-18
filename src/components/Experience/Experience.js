import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";
import Slide from "@material-ui/core/Slide";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MediaQuery from "react-responsive";
import {withSnackbar} from 'notistack';

import './Modal.css';


const Styles = styled.div`

    .gridList{
        transform: 'translateZ(0)';
    }
    
    .item {
        position: relative;
        width: 100%;
        display: inline-block;
    }
    
    .item img {
        max-width: 100%;
        width:100%
        display:block;
        -webkit-transition: .5s ease;
        -moz-transition: .5s ease;
        transition: .5s ease;
    }
    .item:hover img {
        -webkit-transform: scale(1.2,1.2);
        -moz-transform: scale(1.2,1.2);
        transform: scale(1.2,1.2);
        top:-50%

    }
    
    .item:hover img:before{
        display: block;
    }
    
    .item:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: #000;
        background: rgba(0,0,0,0.3);
        z-index: 2;
        opacity: 0;
        -moz-transition: 0.5s ease;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
    }
    .item:hover:before {
        opacity: 1;
    }
    
    .overlay{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    
    .outer-container {
      position: relative;
      width: 100%;
    }
    
    .inner-text {
        position: absolute;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    
    .inner-circle {
        position: absolute;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    
    .circle{
        border-radius: 50%;
        background-color:#fcbd0b;
        width:150px;
        height:150px;
        opacity:0;
        transition: all 0.5s ease;
        border: 2px solid #ffd04d;
    }
    
    .item:hover .circle{
        animation: createBox .5s forwards;
    }
    .item:hover .font-h2{
        animation: createBox .5s forwards;
    }
    
    
    .span-ani{
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }
    
    .font-h2{
        display: inline-block;
        vertical-align: middle;
        height: 100%;
        color: #fff;
        font-size:12px;
        font-weight:bold;
        letter-spacing: 1px; 
        opacity:0;
        transition: all 0.5s ease;
        font-family: "Open Sans", sans-serif;
    }
    
    @keyframes createBox {
      from {
        transform: scale(0);
        opacity:0;
      }
      to {
        transform: scale(1);
        opacity:1;
      }
    }
   
    
`;


class Experience extends React.Component {

    state = {
        tileData: [
            {
                title: 'Ship Supplies Direct',
                text: 'VIEW EXPERIENCE',
                featured: false,
                type: 'experience',
                time: ['Aug 2019 – Present (Part Time)', 'May 2019 – Aug 2019 (Intern)'],
                role: 'Data Analyst / Software Developer Intern, Part Time',
                content: [
                    'Created a model to predict delay of vessel arrival timing to a 80% accuracy',
                    'Analyzed list of potential customers based on data (trip frequency/volume) and created a dashboard to allow for more data driven decisions',
                    'Developed a computer vision model to identify and count items using CRNN model to a 73% accuracy',
                    'Overhauled websites for SSD and Simpfleet to improve user experience',
                ],
                links: [['View Site', 'http://www.shipsuppliesdirect.com'],['View Testimony', '/documents/SSD_Testimony.pdf']],
                img: '/images/ssd.png'
            },
            {
                title: 'SimpFleet',
                text: 'VIEW PROJECT',
                featured: false,
                type: 'project',
                time: ['Aug 2019 – Present (Part Time)', 'May 2019 – Aug 2019 (Intern)'],
                role: 'Data Analyst / Software Developer Intern, Part Time',
                content: [
                    'Built job creation, dashboard, analytics, job scheduling and view details modules for Simpfleet',
                    'Designed and implemented a scheduling algorithm to find most efficient route of delivery'
                ],
                links: [['View Site', 'http://www.simpfleet.com'],['View Testimony', '/documents/SSD_Testimony.pdf']],
                img: '/images/simpfleet.png'
            },
            {
                title: 'Singapore Armed Forces',
                text: 'VIEW EXPERIENCE',
                featured: false,
                type: 'experience',
                time: ['Jan 2016 – Nov 2017'],
                role: 'Pioneer and Vehicle In-Charge, 36 Singapore Combat Engineers (EOD)',
                content: [
                    'Responsible for deployment and maintenance of all vehicles in 36SCE achieving 100% mission success',
                    'Managed nineteen men in 36SCE for daily operations ensuring 24/7 operational readiness',
                ],
                links: [],
                img: '/images/eod.png'
            },
            {
                title: 'FIFTYFIFTY',
                text: 'VIEW PROJECT',
                featured: false,
                type: 'project-50',
                time: ['May 2019 - Aug 2019'],
                role: 'Apollo 11 – Highest level award, Nominated Judge’s Choice',
                content: [],
                links: [['View Project', 'http://fifty50x.web.app'], ['View Repository', 'http://github.com/justussoh/fifty50']],
                img: '/images/fifty.png'
            },
            {
                title: 'JSZH.ME',
                text: 'VIEW PROJECT',
                featured: false,
                type: 'project-jszh',
                time: ['Aug 2019 – October 2019'],
                role: 'Developed using React',
                content: [],
                links: [['View Site', 'http://jszh.me']],
                img: '/images/jszh.png'
            },
            {
                title: 'National University of Singapore',
                text: 'VIEW EXPERIENCE',
                featured: false,
                type: 'experience',
                time: ['Aug 2018 - Present'],
                role: 'Bachelor of Science (Honours) in Business Analytics – CAP 4.42',
                content: ['Learnt programming languages: Python, R and Java.',
                    'Learnt data visualization and database management system: Tableau and MySQL',
                    'Currently also under the University Town College Program in Tembusu College'],
                links: [],
                img: '/images/nuslogo.png'
            },
            {
                title: 'Tembusu College',
                text: 'VIEW EXPERIENCE',
                featured: false,
                type: 'experience',
                time: ['Aug 2018 - Present'],
                role: 'Resident and Student',
                content: [
                    'Co-leaders for Tembusu Christian Fellowship',
                    'Represented Tembusu College for Floorball in ICG’18',
                    'Tembusu Climbing Club',
                ],
                links: [],
                img: '/images/tembusu.png'
            },
            {
                title: 'Meridian Junior College',
                text: 'VIEW EXPERIENCE',
                featured: false,
                type: 'experience',
                time: ['Jan 2014 - Dec 2015'],
                role: 'Rank Points: 86.75 / 90.00, Distinction in H2 Physics, H2 Math AND H2 Chemistry.',
                content: [
                    'Colors Award for leadership qualities',
                    'Vice President for Orientation Committee',
                    'Member of the MJC Entrepreneurship Club'
                ],
                links: [],
                img: '/images/mjc.png'
            },
        ],
        isLoading: true,
        showModal: false,
        modalIndex: 0,
        showSnackBar: true,
        mobile: false,
        width: 0,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000);
        window.setTimeout(() => this.props.enqueueSnackbar('Please note these some projects are not my design.', {variant: 'warning', key:'1'}), 1500);
        window.setTimeout(() => this.props.enqueueSnackbar('Just the code!', {variant: 'warning', key:'2'}), 2000);
        window.setTimeout(() => this.props.closeSnackbar('1'), 4000);
        window.setTimeout(() => this.props.closeSnackbar('2'), 5000);
        // window.setTimeout(() => this.setState({showSnackBar: false}), 4000);
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({mobile: window.innerWidth <= 425, width: window.innerWidth});
    }

    clickTile = (index) => {
        this.setState({showModal: true, modalIndex: index})
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    SlideTransition = (props) => {
        return <Slide {...props} direction="up"/>
    };

    handleSnackBarClose = () => {
        this.setState({showSnackBar: false})
    };

    handleClickLink = (link) => {
        window.open(link, '_blank')
    };



    renderModalContent = (tile) => {
        switch (tile.type) {
            case 'project-50':
                return (
                    <div>
                        <p><i>Project summary</i>: Fifty50 is a web application which allows for online polling of
                            questions for quick thoughts and opinions. The combination of flexible question type, clean
                            user interface and smart analytics of results is our unique selling point. It is built on
                            firebase and React framework.
                        </p>
                    </div>
                );
            case 'project-jszh':
                return (
                    <div>
                        <p><i>Project summary</i>: JSZH is a static website that is meant to showcase my skills using
                            React and other front end libraries. Some future plans I have for the site is to implement
                            a database to the backend to store all my experiences as well as make the site mobile
                            friendly.
                        </p>
                    </div>
                );
            default:
                return (
                    <ul className='list-font'>
                        {tile.content.map((point, index) => {
                            return (
                                <li key={index}>{point}</li>
                            );
                        })}
                    </ul>
                );
        }
    };

    renderModal = () => {
        let tile = this.state.tileData[this.state.modalIndex];
        return (
            <Dialog
                fullWidth={true}
                open={this.state.showModal}
                onClose={this.closeModal}
                maxWidth="sm"
                fullScreen={this.state.mobile}
                // PaperProps={{style:{minHeight:300}}}
            >
                <DialogTitle id="alert-dialog-title" className='modal-top'>
                    <div className='d-flex'>
                        <div className='d-flex flex-column'>
                            <h4 className='modal-top-title'>{tile.title}</h4>
                            <p className='modal-top-subtext'>{tile.role}</p>
                            {tile.time.map((time, index) => {
                                return (
                                    <p key={index} className='modal-top-subtext'>{time}</p>
                                );
                            })}

                        </div>
                        <div className='ml-auto'>
                            <IconButton aria-label="Close" className='modal-close'
                                        onClick={this.closeModal}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent className='modal-exp-content'>
                    {this.renderModalContent(tile)}
                </DialogContent>

                <DialogActions className='d-flex align-items-center justify-content-center modal-bottom'>
                    {tile.links.length > 0 ? tile.links.map((link, index) => {
                        return (
                            <Button key={index} variant="outlined"
                                    onClick={() => this.handleClickLink(tile.links[index][1])}
                                    className='visit-site-button'>{tile.links[index][0]}</Button>
                        );
                    }) : ''}
                </DialogActions>

            </Dialog>
        );

    };

    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:
                return (
                    <GridList cellHeight={'auto'} spacing={0} className='gridList'
                              cols={this.state.mobile ? 8 : 4}>
                        {this.state.tileData.map((tile, index) => (
                            <GridListTile key={tile.title} cols={this.state.mobile ? 4 : 1}
                                          rows={this.state.mobile ? 1 : 1}
                                          className='item' onClick={() => this.clickTile(index)}>
                                <div>
                                    <img src={tile.img} alt={tile.title}/>
                                </div>
                                <div className="inner-text">
                                    <h2 className='font-h2'>
                                        <div className='circle d-flex align-items-center justify-content-center'>
                                            <span className='span-ani'>{tile.text}</span>
                                        </div>
                                    </h2>
                                </div>
                            </GridListTile>
                        ))}
                    </GridList>
                );
        }
    };

    renderMobileContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:
                return (
                    <GridList cellHeight={this.state.width / 2} spacing={0} className='gridList'
                              cols={2}>
                        {this.state.tileData.map((tile, index) => (
                            <GridListTile key={tile.title} cols={1}
                                          rows={1}
                                          className='item' onClick={() => this.clickTile(index)}>
                                <img src={tile.img} alt={tile.title}/>
                            </GridListTile>
                        ))}
                    </GridList>
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
                    <Container fluid style={{
                        height: '100vh',
                        backgroundColor: "#252627",
                        paddingLeft: 0,
                        paddingRight: 0,
                        overflow: 'hidden',
                    }}>

                        <Styles style={this.state.mobile ? {height: "100%", overflow: 'scroll'} : {height: "100%"}}>
                            <MediaQuery minWidth={426}>
                                {this.renderContent()}
                            </MediaQuery>
                            <MediaQuery maxWidth={425}>
                                {this.renderMobileContent()}
                            </MediaQuery>
                            {this.renderModal()}

                            {/*<Snackbar anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}*/}
                            {/*          open={this.state.showSnackBar && !this.state.isLoading}*/}
                            {/*          message={<span id="message-id">Please note these some projects are not my design, just the code!</span>}*/}
                            {/*          action={*/}
                            {/*              <IconButton*/}
                            {/*                  key="close"*/}
                            {/*                  color="inherit"*/}
                            {/*                  onClick={this.handleSnackBarClose}*/}
                            {/*              >*/}
                            {/*                  <CloseIcon/>*/}
                            {/*              </IconButton>*/}
                            {/*          }*/}
                            {/*          TransitionComponent={this.SlideTransition}*/}
                            {/*/>*/}
                        </Styles>
                    </Container>
                </CSSTransition>
            </SwitchTransition>
        )
    }
}

export default withSnackbar(Experience);

