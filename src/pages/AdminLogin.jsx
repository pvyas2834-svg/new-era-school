import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://new-era-school.onrender.com/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
if (response.ok) {
  localStorage.setItem("admin_token", data.access_token);

  alert("Login successful!");

  navigate("/admin-dashboard");
}else {
      alert(data.detail || "Invalid username or password");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  }
};

  return (
    <div className="admin-login-page">

      <div className="admin-login-box">

        <div className="admin-logo">
          NE
        </div>

        <p className="admin-small-title">
          NEW ERA PUBLIC SCHOOL
        </p>

        <h1>Admin Login</h1>

        <p className="admin-login-subtitle">
          Sign in to manage school information and enquiries.
        </p>

        <form onSubmit={handleLogin}>

          <div className="admin-form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Login →
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;