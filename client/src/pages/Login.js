// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', formData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token); // 🧠 Store JWT token
      navigate('/dashboard'); // 🔁 Redirect to dashboard
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
