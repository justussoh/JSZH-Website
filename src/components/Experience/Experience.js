import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Loading from "../Loading/Loading";
import SwitchTransition from "react-transition-group/SwitchTransition";
import {CSSTransition} from "react-transition-group";

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
        height:50vh
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
        width: 100%;
        text-align: center;
        top: 50%;
        left: 0;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        z-index: 1;
    }
    
    .font-h2:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 50px;
        margin-left: -25px;
        height: 2px;
        background: #fff;
        background: rgba(255, 255, 255, 0.5);
        transition: all 200ms ease;
        -webkit-transition: all 200ms ease;
        -moz-transition: all 200ms ease;
        -o-transition: all 200ms ease;
        -ms-transition: all 200ms ease;
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
        margin: 0 50px;
        padding-bottom: 0.75em;
        height: 100%;
        color: #fff;
    }
   
    
`;

class Experience extends React.Component {

    state = {
        tileData: [
            {
                title: 'Ship Supplies Direct',
                featured: true,
                img: '/images/ssd.png'
            },
            {
                title: 'Singapore Armed Forces',
                featured: false,
                img: '/images/eod.png'
            },
            {
                title: 'Fifty Fifty',
                featured: false,
                img: '/images/fifty.png'
            },
            {
                title: 'SimpFleet',
                featured: false,
                img: '/images/simpfleet.png'
            },
            {
                title: 'Website',
                featured: false,
                img: '/images/jszh.png'
            },
            {
                title: 'Tembusu College',
                featured: false,
                img: '/images/tembu.png'
            },
            {
                title: 'The Meridian Council',
                featured: false,
                img: '/images/mjc.png'
            },
        ],
        isLoading: true,
    };

    componentDidMount() {
        window.setTimeout(() => this.setState({isLoading: false}), 1000)
    }

    renderContent = () => {
        switch (this.state.isLoading) {
            case true:
                return <Loading/>;
            default:

                return (
                    <Container fluid style={{
                        height: '100vh',
                        backgroundColor: "#252627",
                        paddingLeft: 0,
                        paddingRight: 0,
                        overflow: 'hidden',
                    }}>
                        <Styles style={{height: "100%"}}>
                            <GridList cellHeight='auto' spacing={1} className='gridList' cols={4}>
                                {this.state.tileData.map(tile => (
                                    <GridListTile key={tile.title} cols={tile.featured ? 2 : 1}
                                                  rows={tile.featured ? 2 : 1}
                                                  className='item'>
                                        <div>
                                            <img src={tile.img} alt={tile.title}/>
                                        </div>
                                        <div className="item-overlay"></div>
                                        <div className="inner-text">
                                            <h2 className='font-h2'>
                                                <span className='span-ani'>{tile.title}</span>
                                            </h2>
                                        </div>
                                    </GridListTile>
                                ))}
                            </GridList>
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

export default Experience;

