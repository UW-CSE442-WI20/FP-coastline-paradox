import React from 'react';
import styled from "styled-components";
import './index.css';


const Box = styled.div`
    font-weight: bold;
    // text-align: center;
    margin: 5em;
    padding: 1em 5em ;
    border: 1px solid;
`;


class ExplanationBox extends React.Component {
    render() {
        return (

            <Box>
                <h3>{this.props.content}</h3>
            </Box>
        );
    }
}

export default ExplanationBox;
