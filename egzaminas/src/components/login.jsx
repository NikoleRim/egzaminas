import { useNavigate } from "react-router-dom";
import { useState } from 'react';
 
export default function login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username ,email, password });
    setUsername("");
    setPassword("");
    setEmail("");
};
const gotoMainPage = () => navigate("/Form");
const gotoRegister = () => navigate("/register")
 
    return (
        <div className="login">
            <div>
                <h1>Prisijungimas</h1>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
 
            <form>
                <label className="label">Username:</label>
                <input onChange={handleUsername} className="input"
                    value={username} type="text" />
 
                <label className="label">Email:</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
 
                <label className="label">Password:</label>
                <input onChange={handlePassword} className="input"
                    value={password} type="password" />
 
                <button onClick={handleSubmit} className="btn"
                        type="submit">
                    Submit
                </button>
            </form>
            <span classname="link" onClick={gotoMainPage}>
                    Main page
            </span>
            <span className='link' onClick={gotoRegister}>
            Register
        </span>
        </div>
    );
}