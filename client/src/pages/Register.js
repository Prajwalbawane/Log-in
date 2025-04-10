// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const res = await axios.post('http://localhost:3000/register', formData);


function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register', formData);
      alert(res.data.message);
      navigate('/login'); // ✅ Redirect to login page after register
    } catch (err) {
      alert('Register failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
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
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
