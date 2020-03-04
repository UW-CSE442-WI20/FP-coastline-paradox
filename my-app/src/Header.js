import React from 'react';
import './index.css';

const title     = "The Coastline Paradox"
const hook  = "Is it possible to measure a coastline’s true length?"

function Header() {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{hook}</h2>
    </div>
  );
}

export default Header;
