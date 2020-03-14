import React from 'react';
import './index.css';

import styled from "styled-components";

const ISLANDS = ["Cuba", "Japan", "Hawaii", "Long Island"];

const TutorialBox = styled.div`
  background-color: white;
  margin: 5em;
  padding: 1em;
  border: 2px dashed black;
  text-align: center;

  height: 50em;
  
`

const Row = styled.div`
  display: flex;  
`

const Column = styled.div`
  flex: 50%;
  
`

var islandOptions = [];

class Tutorial extends React.Component{
  getMap(name) {
    return name.replace(" ", "_").toLowerCase() + ".png";
  }

  setup() {
    {ISLANDS.forEach((element) =>
      islandOptions.push(
      <div>
        <img src={"./maps/" + this.getMap(element)} width="10%"></img>
        {<h6>{element}</h6>}
      </div>
      )
    )}
  }

  render() {
    this.setup();
    return (
      <TutorialBox>
        {islandOptions}

        

        <Row>
          <Column>
            GRAPH 
          </Column>
          <Column>
            MAP
          </Column>
        </Row>
      </TutorialBox>
    );
  }
}

export default Tutorial;
