import React, { useState } from "react";
import "../style/loginsignup.css";

const LoginSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [action, setAction] = useState<string>("Login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>
            <span>User</span>
            {action}
          </h2>
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <label>Name:</label>
              <input
                className="username"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn">
            <button
              className={
                action === "Login" ? "signuplogin graybtn" : "signuplogin"
              }
              type="submit"
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </button>
            <button
              className={
                action === "Sign Up" ? "signuplogin graybtn" : "signuplogin"
              }
              type="submit"
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginSignup;
