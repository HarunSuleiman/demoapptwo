import React from "react";
import { useState } from "react";

const AddEmployee = (props) => {
//Declare state variables for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // write a function to handle the form submission and send the data to the backend API
  const handleSubmit = (e) => {
    e.preventDefault();
    //prepare the data to be sent to the backend API
    const employeeData = {
      first_name:firstName,
      last_name:lastName,
      email:email,
      password:password
    };
    //send the data to the backend API using fetch   
    fetch("http://localhost:3001/add_employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Employee added:", data);
      // Reset the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    })
    .catch(error => {
      console.error("Error adding employee:", error);
    });


  };

  return (
    <div className="div">
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}> 
        <label htmlFor="FirstName">First_Name:</label>
        <br />
        <input type="text" id="FirstName" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <br />

        <label htmlFor="LastName">Last_Name:</label>
        <br />
        <input type="text" id="LastName" name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <br />

        <label htmlFor="Email"> Email:</label>
        <br />
        <input type="text" id="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />

        <label htmlFor="Password">Password:</label>
        <br />
        <input type="password" id="Password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
