import React from 'react';
import './index.css';

class ExplanationBox extends React.Component {
    render() {
        return (

            <div>
                <h3>{this.props.content}</h3>
            </div>
        );
    }
}

export default ExplanationBox;
