import React from 'react';
import './index.css';

import ExplanationBox from './ExplanationBox.js';

const p1        = "It’s easy to measure the length of a straight line, but due to the fractal-like properties of coastlines, the length of a coastline depends on the method and scale of measurement used. As the unit of measurement decreases in scale, the length of a coastline increases towards infinity. This counterintuitive observation is called the coastline problem/paradox."
const p2        = "Let’s measure the coastline of Great Britain with an epsilon value of 100. With an epsilon value of 100, we find that the length of Great Britain’s coastline is approximately 1558 pixels. But we can see that by using this length of measurement, we miss a lot of the edges and curves that exist on the coastline. In order to get a more accurate measurement of the coastline, we need to decrease the granularity of our measurement tool."
const p3        = "Now, let’s measure the coastline of Great Britain with an epsilon value of 50. With an epsilon value of 50, we find the length of Great Britain’s coastline to be approximately 2256 pixels, which is 144% longer than what we found using an epsilon value of 100. By using this second smallest epsilon value, we saw an increase of 698 pixels in measured length over the first measurement."
const p4        = "Finally, let’s measure the coastline of Great Britain with an epsilon value of 25, our smallest granularity in this example. With an epsilon value of 25, we find that the length of Great Britain’s coastline is approximately 2886 pixels, which is 127% longer than our previously recorded value. With the smallest epsilon value, we saw an increase of 630 pixels over the second measurement, and an increase of 1328 pixels over the first measurement."
const p5        = "When considering all three figures, we see that the approximated length of the coastline increases as we degrease the length of the measuring scale. This is the coastline paradox!"


let paragraphs = [p1, p2, p3, p4, p5];

function Content() {
    let boxes = [];

    paragraphs.forEach(function(element) {
        boxes.push(<ExplanationBox content={element}></ExplanationBox>)
    });

  return (
    <div class="row">
    <div class="column">
        <h2>Column 1</h2>
        {boxes}   
    </div>
    <div class="column">
        <h2>Column 2</h2>

        <h1>MAPS GOES HERE</h1>
    </div>
    </div>
  );
}

export default Content;
