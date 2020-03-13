import React from 'react';
import './App.css';
import styled from "styled-components";


import Header from './Header.js';
import Content from './Content.js';
import Tutorial from './Tutorial.js';


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
