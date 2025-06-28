
import React from 'react';

const SecondComponent = (props) => {
    return (
        <div>
            <h2>This is the Second Component</h2>
            <p>{props.message}</p>
        </div>
    );
};

export default SecondComponent;