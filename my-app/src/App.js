import React from 'react';
import './App.css';
import styled from "styled-components";


import Header from './Header.js';
import Content from './Content.js';
import Tutorial from './Tutorial.js';


const StickyStyled = styled.div`
.section {
  height: 100vh;
}

.sticky {
  background-color: red;
  width: 100%;
  & div {
    padding: 30px;
  }
}

.blue {
  background-color: blue;
}
`;


function App() {
  return (
    <div>
      

      <Header></Header>
      <Content></Content>
      <Tutorial></Tutorial>
    </div>
  );
}

export default App;
