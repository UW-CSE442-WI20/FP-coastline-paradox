import React from 'react';
import './App.css';
import styled from "styled-components";

import Header from './Header.js';
import Content from './Content.js';
import Tutorial from './Tutorial.js';
import Who from './Who.js';
import Citations from './Citations.js';

function App() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Tutorial></Tutorial>
      <Who></Who>
      <Citations></Citations>
    </div>
  );
}

export default App;
