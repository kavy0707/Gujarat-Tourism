import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Signup.css";

function Signup() {
    const navigate = useNavigate();
    const [credential, setCredential] = useState({
        Firstname: "",
        Lastname: "",
        Number: "",
        email: "",
        Username: "",
        password: ""
    });

    const onchange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Firstname: credential.Firstname,
                    Lastname: credential.Lastname,
                    Number: credential.Number,
                    email: credential.email,
                    Username: credential.Username,
                    password: credential.password,
                }),
            });



            if (!response.ok) {
                const errorText = await response.text();
                console.error("Signup Error:", errorText);
                return;
            }

            const json = await response.json();
            console.log("Signup Success:", json);
            navigate("/login");
        } catch (error) {
            console.error("Signup Request Failed:", error);
        }
    };

    return (
        <div className="signupPage">
            <form id="signupForm" onSubmit={handleSubmit}>
                <div className="con">
                    <header className="headForm">
                        <h2>Sign-up</h2>
                    </header>

                    <div className="fieldSet" id="fieldset">
                        <span className="formInput" id="formInput">
                            <i className="fa fa-user-circle"></i>
                        </span>
                        <input className="formInput" id="Firstname" name="Firstname" type="text" placeholder="Firstname"
                            onChange={onchange} required />
                        <input className="formInput" id="Lastname" name="Lastname" type="text" placeholder="Lastname"
                            onChange={onchange} required />
                        <input className="formInput" id="Number" name="Number" type="text" placeholder="Phone number"
                            onChange={onchange} required />
                        <input className="formInput" id="Email" name="email" type="text" placeholder="Email"
                            onChange={onchange} required />
                        <input className="formInput" id="Username" name="Username" type="text" placeholder="@UserName"
                            onChange={onchange} required />
                        <input className="formInput" type="password" placeholder="Password" id="Password"
                            name="password" onChange={onchange} required />

                        <button type="submit" id="signupBtn" className="signUpBtn">Sign-up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;









