import React from 'react';
import history from '../../history';
import styled from 'styled-components';
import {Container, Col, Row} from 'react-bootstrap';
import WordCloud from "../WordCloud/WordCloud";

const Styles = styled.div`

`;

class LandingSite extends React.Component {

    render() {
        return (
            <Styles>
                <Container fluid style={{height:"100vh", backgroundColor:'#252627'}}>
                    <WordCloud />
                </Container>
            </Styles>
        );
    }
}

export default LandingSite;

