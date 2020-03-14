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
  
  height: 60em;
  
`
const MapThumbnail = styled.img`
  // width: 5em;
  // height: 5em;
  width: 25%;
  padding-top: 2em;
`


const MapOptionBox = styled.div`
  border: 2px solid black;
  margin: 3em;  
`

const Row = styled.div`
  display: flex;  
`

const Column = styled.div`
  flex: 50%;
`

var islandOptions = [];

class Tutorial extends React.Component{
  constructor(props) {
    super(props);
    this.state = { map: "Cuba" };
    this.setup();
  }

  getMap(name) {
    return "./maps/" + name.replace(" ", "_").toLowerCase() + ".png";
  }

  changeChosen(name) {
    this.setState({ map: name });
  }

  setup() {
    
    {ISLANDS.forEach((element) =>
      islandOptions.push(
      <MapOptionBox onClick={() => this.changeChosen(element)}>
        <MapThumbnail src={this.getMap(element)} ></MapThumbnail>
        {<h6>{element}</h6>}
      </MapOptionBox>
      )
    )}
  }

  render() {
    console.log(this.getMap(this.state.map));
    console.log(islandOptions);
    console.log(document.getElementById(this.getMap(this.state.map)))
    
    // document.getElementById(this.getMap(this.state.map)).setAttribute('style', 'border: 2px solid red;');
    
    return (
      <TutorialBox>
        <Row>
          <Column>
            <h3>Map Choices</h3>
            {islandOptions} 
          </Column>
          <Column>
            <h3>Coastline and Epsilon Graph of {this.state.map}</h3>
            GRAPH HERE
          </Column>
          <Column>
            <h3>Map of {this.state.map}</h3>
            <img src={this.getMap(this.state.map)} width="100%"></img>
          </Column>
        </Row>
      </TutorialBox>
    );
  }
}

export default Tutorial;
