import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");
    };

    const gotoLoginPage = () => navigate("/login");
    const gotoMainPage = () => navigate("/Form")

    return (
        <div className='register__container'>
            <h2>Sign up </h2>
            <form className='register__form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' id='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' value={username} required onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor='tel'>Phone Number</label>
                <input type='tel' name='tel' id='tel' value={tel} required onChange={(e) => setTel(e.target.value)}/>
                <label htmlFor='tel'>Password</label>
                <input type='password' name='password' id='password' minLength={8} required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='signupBtn'>SIGN UP</button>
                <p>Already have an account?{" "}
                <span className='link' onClick={gotoLoginPage}>
                    Login
                </span>
                <span classname="link" onClick={gotoMainPage}>
                    Main page
                </span>
                </p>
            </form>
        </div>
        );};

export default Register;