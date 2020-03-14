import React from 'react';
import styled from "styled-components";
import './index.css';

const WhoBox = styled.div`
    border-top: 2px dashed black;
    margin-top: 10em;
    background-color: #f6d7b0;
    padding: 2em;
`

class Who extends React.Component {
    render() {
        return (
           <WhoBox>
               <h4>Contributors:</h4>
               <ul>
                    <li>Ken Dong, @kdong</li>
                    <li>Trey Tamaki, @treytamaki</li>
                    <li>Billy Wu, @billyshaominwu</li>
               </ul>
           </WhoBox>
        );
    }
}

export default Who;
