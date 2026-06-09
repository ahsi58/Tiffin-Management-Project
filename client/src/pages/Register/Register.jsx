import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import "./Register.css";

function Register() {
  const [error, setError] = useState("");

  console.log("Current error:", error);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (e) => {
  setError("");

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = (e) => {
  e.preventDefault();

  setError("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    console.log("Invalid email");
    setError("Please enter a valid email address.");
    return;
  }

  if (formData.password.length < 6) {
    console.log("length");
  setError("Password must be at least 6 characters.");
  return;
    }

  if (formData.password !== formData.confirmPassword) {
    console.log("mismatch");
    setError("Passwords do not match.");
    return;
  }

  console.log("Register Data:", formData);

};

  return (
    <>
      <Navbar />

      <div className="register-container">
        <div className="register-card">

          <h1>Create Account</h1>
          <p>Join TiffinHub and start managing meals easily.</p>

           {error && (
            <div className="error-box">
                {error}
            </div>
            )}

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Register As</label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">User</option>
                <option value="user">Member</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <button
              type="submit"
              className="register-btn"
            >
              Register
            </button>

          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Register;