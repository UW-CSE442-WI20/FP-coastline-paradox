import React from 'react';
import styled from "styled-components";
import './index.css';

const CitationBox = styled.div`
    border-top: 2px dashed black;
    padding: 2em;
    background-color: lightgray;
`

class Citations extends React.Component {
    render() {
        return (
           <CitationBox>
                <h4>Citations:</h4>
                <ul>
                    <li>Wave Photo: <code>https://giphy.com/stickers/fun-summer-beach-Mb9GGpjLPorX0qHSF7</code></li>
                </ul>
           </CitationBox>
        );
    }
}

export default Citations;
