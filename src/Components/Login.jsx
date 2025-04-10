import e from 'cors'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Css/Login.css'

function Login() {

    const Navigate = useNavigate()
    const [credential, setcredential] = useState({ email: "", password: "" })

    const handleclick = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success === true) {
            alert("login successfully")
            Navigate("/")
            localStorage.setItem("token",json.token)
        }
        else {
            alert("unauthorization")
        }
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (


            <form id="signupForm" onSubmit={handleclick}>
                <div className="con">

                    <header className="head-form">
                        <h2>Log In</h2>
                        <p>login here using your username and password</p>
                    </header>

                    <div className="field-set">
                        <input type="email" className="formInput" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onchange} />
                        <input type="password" className="formInput" id="password" name='password' placeholder="Password" onChange={onchange} />
                        <button className="log-in" id='login'> Log In </button>
                    </div>

                    <div className="other">
                        <button className="btn-submits" id='"btn-submits"'>Forgot Password</button>
                        <a className="signup-btn" href="/signup">Sign Up
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </form>
    )
}

export default Login;
