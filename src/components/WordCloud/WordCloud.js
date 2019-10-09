import React from 'react';
import history from '../../history';
import TagCloud from "react-tag-cloud";

import {faAngleDown, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './WordCloud.css';

const styles = {
    large: {
        fontSize: 60,
        fontWeight: "bold",
        color: "white",
    },
    small: {
        opacity: 0.7,
        fontSize: 18,
        color: "#8d8d8d",
    },
    normal: {
        fontSize: 32,
        color: "#c2c2c2",
    }
};

class WordCloud extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 5000);
    }

    handleClick = () => {
        history.push('/home')
    };

    handleContact = () => {
        history.push('/contact')
    };

    handleLinkin = () => {
        window.open('https://www.linkedin.com/in/justussoh/', '_blank')
    };

    handleGithub = () => {
        window.open('https://github.com/justussoh', '_blank')
    };

    render() {

        return (
            <div className="app-outer">
                <div className="app-inner">
                    <div className='d-flex align-items-center' style={{padding:" 0 10%"}}>
                        <div style={{position: "relative",}}>
                            <h3 className='font-color font-wordcloud'>Justus Soh</h3>
                            <h6 className='font-color font-sub-wordcloud'>Data Analyst / Web Developer</h6>
                        </div>
                        <div className='ml-auto d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faLinkedin} className='icon' onClick={this.handleLinkin}/>
                            <FontAwesomeIcon icon={faGithub} className='icon' onClick={this.handleGithub}/>
                            <FontAwesomeIcon icon={faEnvelope} className='icon' onClick={this.handleContact}/>
                        </div>
                    </div>
                    <TagCloud
                        className="tag-cloud"
                        style={{
                            fontFamily: "sans-serif",
                            fontSize: 32,
                            color: '#707070',
                            padding: 6
                        }}
                    >
                        <div style={styles.large}>Data Analyst</div>
                        <div style={styles.large}>Programmer</div>
                        <div style={styles.large}>Machine Learning</div>
                        <div style={{fontStyle: "italic"}}>Entrepreneurship</div>
                        <div style={styles.normal}>Python</div>
                        <div style={styles.normal}>JavaScript</div>
                        <div style={styles.normal}>R</div>
                        <div style={styles.normal}>Tableau</div>
                        <div style={styles.normal}>mySQL</div>
                        <div style={styles.normal}>Photoshop</div>
                        <div style={styles.normal}>Illustrator</div>
                        <div style={styles.normal}>Adobe XD</div>
                        <div style={styles.normal}>Photography</div>
                        <div style={styles.normal}>MongoDB</div>
                        <div style={styles.small}>NodeJS</div>
                        <div style={styles.small}>Material UI</div>
                        <div style={styles.small}>BootStrap</div>
                        <div style={styles.small}>HTML</div>
                    </TagCloud>
                    <div className='d-flex align-items-center justify-content-center '
                         onClick={this.handleClick}>
                        <div className='hover-container d-flex align-items-center justify-content-center flex-column'>
                            <h6 className='font-color font-sub-wordcloud hover' style={{marginBottom: 0}}>View My
                                Portfolio</h6>
                            <FontAwesomeIcon size="3x" icon={faAngleDown} className='blink arrow hover'
                                             onClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default WordCloud;

