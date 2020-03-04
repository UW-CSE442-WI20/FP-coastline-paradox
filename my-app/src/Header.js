import React from 'react';
import styled from "styled-components";

import './index.css';

const title     = "The Coastline Paradox"
const hook      = "Is it possible to measure a coastline’s true length?"

const ScreenBox = styled.div`
    // font-weight: bold;
    margin: 5em;
    padding: 10em 2em ;
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
