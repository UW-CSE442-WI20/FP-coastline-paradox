import React from 'react';
import './index.css';
import { Slider } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import styled from "styled-components";

const ISLANDS = ["Britain", "Japan", "Hawaii", "Long Island"];

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
const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 100,
  },
];

const IOSSlider = withStyles({
  root: {
    color: '#62dfd5',
    height: 2,
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 11px)',
    top: 40,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

var islandOptions = [];

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { map: "Britain", epsilon: "990" };
    this.setup();
  }

  getMap(name) {
    return "./maps/" + name.replace(" ", "_").toLowerCase() + ".png";
  }

  getMapEpsilon(name, epsilon) {
    return "./maps/" + name.replace(" ", "_").toLowerCase() + "_steps/" + "epsilon_" + epsilon + ".png";
  }

  handleChange = (event, epsilon) => {
    this.setState({ epsilon: epsilon });
  }

  changeChosen(name) {
    this.setState({ map: name });
  }

  setup() {

    {
      ISLANDS.forEach((element) =>
        islandOptions.push(
          <MapOptionBox onClick={() => this.changeChosen(element)}>
            <MapThumbnail src={this.getMap(element)} ></MapThumbnail>
            {<h6>{element}</h6>}
          </MapOptionBox>
        )
      )
    }
  }

  render() {
    console.log(this.getMap(this.state.map));
    console.log(this.state.epsilon);
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
            <h4>Epsilon (e) = </h4>
            <IOSSlider
              orientation="horizontal"
              aria-label="ios-slider"
              defaultValue={990}
              min={0}
              max={990}
              step={15}
              value={this.state.epsilon}
              onChange={this.handleChange}
              valueLabelDisplay="on"
            />
            <h3> Map of {this.state.map} </h3>
            <img src={this.getMapEpsilon(this.state.map, this.state.epsilon)} width="80%" />
          </Column>
          {/* <Column>
            <h3>Map of {this.state.map}</h3>
            <img src={this.getMap(this.state.map)} width="75%"></img>
          </Column> */}
        </Row>
      </TutorialBox >
    );
  }
}

export default Tutorial;
