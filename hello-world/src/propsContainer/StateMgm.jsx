
import React from "react";
import {useState} from "react";

const StateManagement = () => {
    const [city, setCity] = useState("Hyderabad");
    console.log(city);
if(city === "Bangalore"){
    setCity("Hyderabad");
}
else if(city === "Hyderabad"){
    setCity("Bangalore");
}
return (
    <div>city: {city} </div>
);
}
export default StateManagement;
