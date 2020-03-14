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
                    <li>Work Cited:</li>
                        <ul>
                            <li>https://mathisonian.github.io/kde/</li>
                            <li>https://www.atlasobscura.com/articles/why-its-impossible-to-know-a-coastlines-true-length</li>
                            <li>https://www.discovermagazine.com/environment/no-one-knows-how-long-the-us-coastline-is</li>
                        </ul>
                    <li>Photos: 
                        
                        <ul>
                            <li>Wave Gif: https://giphy.com/stickers/fun-summer-beach-Mb9GGpjLPorX0qHSF7</li>
                            <li>Japan Map: https://webstockreview.net/explore/japan-clipart-map-japan/</li>
                            <li>Long Island Map: https://i.pinimg.com/474x/b4/21/cd/b421cdc1305166b2739ae4540063e958--the-long-the-ojays.jpg</li>
                            <li>Cuba Map: https://creazilla.com/nodes/2660-cuba-map-silhouette</li>
                            <li>Hawaii Map: https://www.clipart.email/make-a-clipart/?image=2218883</li>
                        </ul>
                    </li>

                </ul>
           </CitationBox>
        );
    }
}

export default Citations;
