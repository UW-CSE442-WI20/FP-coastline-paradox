import React from 'react';
import styled from "styled-components";
import './index.css';

const IMAGE_WIDTH_PERCENTAGE = "50%";

const ContentBox = styled.div`
    font-weight: bold;
    margin-left: 5em;
    margin-right: 5em;
    padding: 1em;
    border: 2px dashed black;
    background-color: white;
`;

const ImageBox = styled.div`
    text-align: center;
    background-color: white;
    width: 80%;
    padding: 1em;
    border: 2px dashed black;
`

const InsideImage = styled.div`
    padding-top: 15em
    display: inline-block;  
`

const Row = styled.div`
    display: flex;  
    margin-top: 15em;
    margin-bottom: 10em;
`

const Column = styled.div`
    flex: 50%;
`


class ExplanationBox extends React.Component {
  render() {
    return (
      <Row>
        <Column>
          <ContentBox>
            <h2>{this.props.content}</h2>
          </ContentBox>
        </Column>
        <Column>
          {this.props.image &&
            <ImageBox>
              <InsideImage><img src={this.props.image} width={IMAGE_WIDTH_PERCENTAGE}></img></InsideImage>
              <h5>Epsilon (ε) = {this.props.epsilon}</h5>
              <h5> Approximate length = {this.props.length} miles</h5>
            </ImageBox>
          }
        </Column>
      </Row>
    );
  }
}

export default ExplanationBox;
