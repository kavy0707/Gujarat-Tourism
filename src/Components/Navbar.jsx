import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import './Css/Navbar.css'


function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login", { replace: true });
        localStorage.removeItem('token');
    };

    return (
        // <nav className="navbar navbar-expand-lg custom-navbar" >
        //     <div className="container-fluid">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //             aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse-navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">HOME</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">ABOUT</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className={`nav-link ${location.pathname === "/Localguide" ? "active" : ""}`} to="/Localguide">LOCAL GUIDE</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="#">CONTACT US</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link active" href="/city">CITY</a>
        //                 </li>


        //                 <div className='btn'>
        //                 {localStorage.getItem('token') ? (
        //                 <Link className="btn btn-outline-primary mx-1" onClick={handleout}>Log-out</Link>
        //             ) : (
        //                 <form className="d-flex">
        //                     <Link className="btn btn-outline-primary" to="/login">Login</Link>
        //                     <Link className="btn btn-outline-primary my-1" to="/signup">Signup</Link>
        //                 </form>
        //             )}
        //                 </div>
        //             </ul>


        //         </div>
        //     </div>
        // </nav>

        <nav>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#attractions">Attractions</Link></li>
                <li><Link to="#restaurants">Restaurants</Link></li>
                <li><Link to="#events">Events</Link></li>
                <li><Link to="/Localguide">Local Guide</Link></li>

                <div className="nav-btns">
                    {localStorage.getItem('token') ? (
                        <button onClick={handleLogout} className="logout-btn">Log-out</button>
                    ) : (
                        <>
                            <Link to="/login"><button className="login-btn">Login</button></Link>
                            <Link to="/signup"><button className="signup-btn">Signup</button></Link>
                        </>
                    )}
                </div>
            </ul>
        </nav>

    );
}

export default Navbar;
