import React, { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState({
    appId: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const signupUser = (e) => {
    e.preventDefault();
    console.log("signupUser", userDetails);
  };

  return (
    <form onSubmit={signupUser}>
      <h3>Sign Up</h3>

      {/* error messages */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already Signuped <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
};

export default Signup;
