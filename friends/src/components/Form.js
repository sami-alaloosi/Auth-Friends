/** @format */

import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const formValues = { username: usernameValue, password: passwordValue };

  const onChange = (event, callback) => {
    const { value } = event.target;
    callback(value);
  };

  const submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        console.log("API RESPONSE:", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log("API ERROR:", { err }));
  };

 

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="username">
          <input
            name="username"
            id="username"
            placeholder="Enter Your Username"
            value={usernameValue}
            onChange={(event) => onChange(event, setUsernameValue)}
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            id="password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={(event) => onChange(event, setPasswordValue)}
          />
        </label>
        <button type="submit">Submit!!!</button>
      </form>
    </div>
  );
};

export default Form;
