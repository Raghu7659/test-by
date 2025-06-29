
import React, { useEffect, useState } from "react";
const userDetails = 'https://api.example.com/user';
console.log(' i am linking from api', userDetails)
const UserPage = () => {
    const [user,setuser] = useState([])
      const userHandler = async () => {
          const response = await fetch(userDetails);
          const data = await response.json();
          setuser(data);
      };
    useEffect(() => {
        console.log(user )
    }, []);
    return (
        <div>
            {user.map((userData, index) => (
                <div key={index}>
                    <h2>User Information</h2>
                    <p>Name: {userData.name}</p>
                    <p>Age: {userData.age}</p>
                    <p>City: {userData.city}</p>
                </div>
            ))}
        </div>
    );
}

export default UserPage;
