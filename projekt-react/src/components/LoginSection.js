import React, { useState } from "react";

function LoginSection() {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-text">{action}</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-inputs">
            {action === "Login" ? (
              <></>
            ) : (
              <div className="login-input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="login-input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login-input">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {action === "Sign Up" ? (
            <></>
          ) : (
            <div className="forgot-password">
              Lost Password? <span>Click here!</span>
            </div>
          )}
          <div className="submit-container">
            <button className="submit" type="submit">
              {action}
            </button>
          </div>
        </form>
        {action === "Sign Up" ? (
          <div className="changing-link">
            Already have an account?{" "}
            <span
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </span>
          </div>
        ) : (
          <div className="changing-link">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Register
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSection;
