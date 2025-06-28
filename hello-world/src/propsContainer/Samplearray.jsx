
import React from "react";
let SampleArray = ["Apple", "Mango", 35, { userName: "John" }];
const SampleArrayComponent = () => {
    return (
        <div>
            <h2>This is the Sample Array Component</h2>
            <p>{SampleArray[0]}</p>
            <p>{SampleArray[1]}</p>
            <p>{SampleArray[2]}</p>
            
        </div>
    );
};

export default SampleArrayComponent;
