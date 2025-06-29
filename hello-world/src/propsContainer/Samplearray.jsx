
import React from "react";

let SampleArray = ["Apple", "Mango", 35, { userName: "John" }];

let players = [
    {
        cricket: "Sachin Tendulkar",
        football: "Lionel Messi",
        basketball: "LeBron James"
    }
];

function SampleArrayComponent() {
    return (
        <div>
            <h2>Players</h2>
            <p>Cricket: {players[0].cricket}</p>
            <p>Football: {players[0].football}</p>
            <p>Basketball: {players[0].basketball}</p>
        </div>
    );
}

export default SampleArrayComponent;
