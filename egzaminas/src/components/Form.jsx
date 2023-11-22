import { useState } from 'react';
import React from 'react'
import { useNavigate } from "react-router-dom";
import './App.css';

export default function Form() {
 
  const [formData, setFormData] = useState({name: "",email: "",desc: "", img:"", kaina:""});
  const handleChange = (event) => {
    const { name, value } = event.target;
    const navigate = useNavigate();
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
const gotoLoginPage = () => navigate("/login")
const gotoRegister = () => navigate("/register")
  const handleSubmit = () => {
return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="desc">Description:</label>
      <textarea id="desc" name="desc" value={formData.message} onChange={handleChange}/>

      <label htmlFor="img">Image:</label>
      <img id="img" name="img" value={formData.message} onChange={handleChange}/>

      <label htmlFor="kaina">Kaina:</label>
      <img id="kaina" name="kaina" type="number" value={formData.message} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
    <span className='link' onClick={gotoLoginPage}>
        Login
    </span>
    <span className='link' onClick={gotoRegister}>
        Register
    </span>
    </div>
  );}}