import React from 'react';
import styled from "styled-components";

import './index.css';

// const BACKGROUND_URL = "https://media.giphy.com/media/7zJgqvSbjBH2M/giphy.gif";

const title     = "The Coastline Paradox"
const hook      = "Is it possible to measure a coastline’s true length?"

const ScreenBox = styled.div`
    padding-top: 12em;
    padding-bottom: 17em;
    padding-left: 7em;
    background-image: url("./double-wave.gif");
    background-color: #f6d7b0; // sand

    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom left;
`;

const FirstTitle = styled.h1`
    font-weight: bold;
    font-size: 5em;
`;

const SecondTitle = styled.h2`
    font-style: italic;
    font-size: 2em;
`;

function Header() {
  return (
    <ScreenBox>
        <FirstTitle>{title}</FirstTitle>
        <SecondTitle>{hook}</SecondTitle>
    </ScreenBox>
  );
}

export default Header;
