import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email: email, password: password });
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="login-checkbox">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Keep me signed in</label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
