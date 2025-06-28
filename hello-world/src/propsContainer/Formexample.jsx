
import React from "react";
const FormExample = (props) => {
    return (
        <section className = 'formsection'>

        <div className="inputDiv">
            <input type = "text" placeholder="Enter your name" />
            <button
                onClick={() => {
                    alert("Button clicked!");
                }}
            >
                Click Me!
            </button>
            <br />
            <button type="submit">Submit</button>
        </div>
        </section>
    );
};


export default FormExample;