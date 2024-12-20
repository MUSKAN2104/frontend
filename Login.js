import React from "react";

const Login = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" style={{ display: "block", margin: "10px auto" }} />
        <input type="password" placeholder="Password" style={{ display: "block", margin: "10px auto" }} />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;