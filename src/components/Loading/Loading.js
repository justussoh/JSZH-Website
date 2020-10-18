import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';

const Styles = styled.div`
    .font-color{
        color:#8d8d8d;
        font-family: "Open Sans",sans-serif !important;
        font-size:16px;
        margin-bottom: 10px;
        letter-spacing: 2px;
    }
    
    .font-title{
        color:#08fdd8;
        font-weight: bold;
    }
    
    .MuiLinearProgress-colorPrimary{
        background-color:#8d8d8d!important;
    }
    
    .MuiLinearProgress-barColorPrimary{
        background-color:#fcbd0b!important;
    }
`;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Loading extends React.Component {

    state = {
        quotes: [
            'is thinking',
            'is currently making tea',
            'is eating an apple',
            'is playing with cats',
            'is playing with dogs',
            'is working',
        ],
        index: 0,
        completed: 0,
    };

    progress = (completed) => {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            let diff = Math.random() * 10;
            return this.progress(completed + diff);
        }
    };

    componentDidMount() {
        this.setState({index: getRandomInt(0, this.state.quotes.length),completed:0});
        window.setTimeout(() => this.progress(0), 0);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {

        return (
            <Container fluid style={{height: '100vh'}}
                       className='d-flex justify-content-center align-items-center'>
                <Styles>
                    <div style={{width: '30vw'}}
                         className='d-flex align-items-center justify-content-center flex-column'>
                        <img src='/images/logo-1.png' alt={''} style={{width: 50, height: 'auto', marginBottom: 10}}/>
                        <h2 className='font-color text-center'>{`Justus ${this.state.quotes[this.state.index]}`}</h2>
                        <div style={{width: '30vw'}}>
                            <LinearProgress variant="determinate" value={this.state.completed}/>
                        </div>
                    </div>
                </Styles>
            </Container>

        );
    }
}

export default Loading;

