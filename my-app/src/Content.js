import React from 'react';
import './index.css';
import styled from "styled-components";

import ExplanationBox from './ExplanationBox.js';

const ImageBox = styled.div`
    display: flex;
    
    justify-content: center;
`
const p1 = "It’s easy to measure the length of a straight line, but due to the fractal-like properties of coastlines, the length of a coastline depends on the method and scale of measurement used. As the unit of measurement decreases in scale, the length of a coastline increases towards infinity. This counterintuitive observation is called the coastline paradox."
const p2 = "Let’s measure the coastline of Great Britain with an epsilon value of 100. With an epsilon value of 100, we find that the length of Great Britain’s coastline to be approximately 7,168 miles. But we can see that by using this length of measurement, we miss a lot of the edges and curves that exist on the coastline. In order to get a more accurate measurement of the coastline, we need to decrease the granularity of our measurement tool."
const p3 = "Now, let’s measure the coastline of Great Britain with an epsilon value of 50. With an epsilon value of 50, we find the length of Great Britain’s coastline to be approximately 10,332 miles, which is 144% longer than what we found using an epsilon value of 100. By using this second smallest epsilon value, we saw an increase of 3,197 miles in measured length over the first measurement."
const p4 = "Finally, let’s measure the coastline of Great Britain with an epsilon value of 25, our smallest granularity in this example. With an epsilon value of 25, we find that the length of Great Britain’s coastline is approximately 13,218 miles, which is 127% longer than our previously recorded value. With the smallest epsilon value, we saw an increase of 2,885 miles over the second measurement, and an increase of 6,082 miles over the first measurement."
const p5 = "Now, let's use an epsilon value of 0. As you can see, with the smallest epsilon value, we are able to cover the nooks and crannies of the coastline. This epsilon value gives us an approximation of 19,470 miles as the length of the coastline."
const p6 = "When considering all figures, we see that the approximated length of the coastline increases as we decrease the length of the measuring scale. This is the coastline paradox!"

function Content() {
  return (
    <div>
      <ExplanationBox content={p1} image={null}></ExplanationBox>
      <ExplanationBox content={p2} image={"./image1.png"} epsilon={100} length={7168}></ExplanationBox>
      <ExplanationBox content={p3} image={"./image2.png"} epsilon={50} length={10332}></ExplanationBox>
      <ExplanationBox content={p4} image={"./image3.png"} epsilon={25} length={13218}></ExplanationBox>
      <ExplanationBox content={p5} image={"./image4.png"} epsilon={0} length={19470}></ExplanationBox>
      <ExplanationBox content={p6} image={null}></ExplanationBox>
    </div >
  );
}

export default Content;
