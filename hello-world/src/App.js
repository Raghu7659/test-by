


import React from 'react';
import './App.css';
import FirstComponent from './propsContainer/FirstComp';
import SecComponent from './propsContainer/SecComp';
import ThirdComponent from './propsContainer/ThirdComp';
import FourthComponent from './propsContainer/FourComp';
import StateManagement from './propsContainer/StateMgm';
import Resize from './propsContainer/Chat';
import FormExample from './propsContainer/Formexample';
//import SampleArrayComponent from './propsContainer/Samplearray';


let a = "Apple";
let b = "Banana";

const user = {
  name: "Raghu",
  age: 24,
  city: "Hyderabad",
  title: "Engineer"
};

function App() {
  return (
    <div className="container">
      <p>I like {a}, {b}</p>
      <h2>This is Raghu</h2>
      <button onClick={() => alert("Hello, World!")}>Click Me!</button>
      
      <FirstComponent name={user.name} age={user.age} city={user.city} />
      <FirstComponent name="John" age={30} city="New York" />
      
      <SecComponent message={user.title} />
      <ThirdComponent title={user.title} />
      <FourthComponent title={user.title} />
      
      <StateManagement />
      <Resize />
      <FormExample />
      <SampleArrayComponent />
    </div>
  );
}

export default App;
// Note: Ensure that the components FirstComponent, SecComponent, ThirdComponent, FourthComponent, StateManagement, Resize, FormExample, and SampleArrayComponent are correctly defined in their respective files in the propsContainer directory.