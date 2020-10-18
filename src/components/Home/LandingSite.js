import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import WordCloud from "../WordCloud/WordCloud";

const Styles = styled.div`

`;

class LandingSite extends React.Component {

    render() {
        return (
            <Styles>
                <Container fluid style={{height:"100vh"}}>
                    <WordCloud />
                </Container>
            </Styles>
        );
    }
}

export default LandingSite;

