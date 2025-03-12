import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/guide.css'
function guide() {
    const navigate = useNavigate()
    const [credential, setcredential] = useState({ name: "", email: "", phonenumber: "", city: "", experience: "", language: "", bio: "" })

    const handleclick = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:3000/api/auth/localguide`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credential.name,
                email: credential.email,
                phonenumber: credential.phonenumber,
                city: credential.city,
                experience: credential.experience,
                language: credential.language,
                bio: credential.bio
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("localguide Error:", errorText);
            return;
        }

        const json = await response.json();
        console.log("localguide added Success:", json);
        navigate("/");
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <div className="animated-bg">
            <div className="registration-container">
                <div className="photo-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/025/869/585/non_2x/round-profile-image-of-man-avatar-for-social-networks-fashion-beauty-blue-and-black-bright-illustration-in-trendy-style-vector.jpg" alt="Guide Photo" className="guide-photo" />
                </div>
                <h2>Local Guide Registration</h2>
                <form id="guideForm" onSubmit={handleclick}>


                    <label htmlFor="name">Full Name:</label>


                    <input type="text" id="name" name="name" placeholder="Enter your name" onChange={onchange} required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="Email Address:" onChange={onchange} required />

                    <label htmlFor="tel">Phone Number:</label>
                    <input type="tel" id="phone" name="phonenumber" placeholder='+91-95698 73625' pattern='[+,0-9]{3} [0-9]{10}'  onChange={onchange} required />

                    <label htmlFor="city">City:</label>
                    <select id="city" name="city" onChange={onchange} required>
                        <option value="">Select your city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Dwarka">Dwarka</option>
                        <option value="Kutch">Kutch</option>
                        <option value="Gir">Gir</option>
                        <option value="Junagadh">Junagadh</option>
                    </select>

                    <label htmlFor="experience">Years of Experience:</label>
                    <input type="number" id="experience" name="experience" min="0" max="30" placeholder="10" onChange={onchange} required />

                    <label htmlFor="languages">Languages Spoken:</label>
                    <input type="text" id="languages" name="language" placeholder="E.g., Hindi, English, Gujarati" onChange={onchange} required />

                    <label htmlFor="bio">Short Bio:</label>
                    <textarea id="bio" name="bio" placeholder="Tell us about yourself" rows="4" onChange={onchange} required></textarea>

                    <button type="submit" className='register'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default guide
