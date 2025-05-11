import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterBtn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("✅ " + data.message);
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, or special characters.
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleRegisterBtn}>
          Register
        </button>
      </div>
    </div>
  );
}
