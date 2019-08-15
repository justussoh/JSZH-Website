import React from 'react';
import history from '../../history';
import TagCloud from "react-tag-cloud";

import './WordCloud.css'

const styles = {
    large: {
        fontSize: 60,
        fontWeight: "bold"
    },
    small: {
        opacity: 0.7,
        fontSize: 18
    }
};

class WordCloud extends React.Component {

    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 6000);
    }

    handleClick = () =>{
        history.push('/home')
    };

    render() {

        return (
            <div className="app-outer">
                <div className="app-inner">
                    <div className='d-flex align-items-center'>
                        <div>
                            <h3>Justus Soh</h3>
                            <h6>Data Analyst/Web Developer</h6>
                        </div>
                        <div className='ml-auto'>
                            <h3>hello</h3>
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
                        <div style={{fontStyle: "italic"}}>Entrupenurship</div>
                        <div style={{fontWeight: 200}}>mySQL</div>
                        <div >Python</div>
                        <div >JavaScript</div>
                        <div >R</div>
                        <div >Tableau</div>
                        <div >mySQL</div>
                        <div>Photoshop</div>
                        <div>Illustrator</div>
                        <div>Adobe XD</div>
                        <div>Photography</div>
                        <div>MongoDB</div>
                        <div style={styles.small}>NodeJS</div>
                        <div style={styles.small}>Material UI</div>
                        <div style={styles.small}>BootStrap</div>
                        <div style={styles.small}>HTML</div>
                    </TagCloud>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button className='ghost-button' onClick={this.handleClick}>Enter the site</button>
                    </div>
                </div>
            </div>


        );
    }
}

export default WordCloud;

