import React from "react";

const Signup = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="Name" style={{ display: "block", margin: "10px auto" }} />
        <input type="email" placeholder="Email" style={{ display: "block", margin: "10px auto" }} />
        <input type="password" placeholder="Password" style={{ display: "block", margin: "10px auto" }} />
        <button type="submit" style={{ padding: "10px 20px" }}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;