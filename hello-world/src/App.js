


import React from 'react';
import './App.css'
import FirstComponent from './propsContainer/FirstComp';
import SecComponent from './propsContainer/SecComp';
import ThirdComponent from './propsContainer/ThirdComp';
import FourthComponent from './propsContainer/FourComp';
import StateManagement  from './propsContainer/StateMgm';
import ClickEvent from './propsContainer/ClickEvent';
import Resize from './propsContainer/Chat';
import FormExample from './propsContainer/Formexample';

let a ="Apple"
let b = "Banana"
const user ={
  name: "Raghu",
  age: 24,
  city: "Hyderabad"
}
function App() {
  return (
    <div className = "container">
      <p>I like {a}, {b}</p>
      <h2>This is Raghu</h2>
     <button onClick={() => alert("Hello, World!")}>Click Me!</button>
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" alt="Raghu" />
      <FirstComponent name={user.name} />
      <SecComponent message={user.title} />
      <ThirdComponent title={user.title} />
      <FourthComponent title={user.title} />
      <StateManagement />
  
      <ClickEvent />
      <Resize />
      <FormExample />
    </div>
  );
}

export default App;



  


