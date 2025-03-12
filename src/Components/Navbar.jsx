import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router'


function Navbar() {

    // it is used for view active page ex. home or about?
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        // console.log(location);   
    }, [location]);

    const handleout = () => {
        navigate("/login", { replace: true }); // Redirect to login
        localStorage.removeItem('token'); // Remove token
    };

  
    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar" style={{backgroundColor : '#ffff31'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">GUJARAT TOURISM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{hover : 'yellowgreen'}}>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : " "} `} aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : " "}`} aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active`} aria-current="page" to="/Localguide">LOCAL GUIDE</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/city">City</a>
                            </li>
                        </ul>


                        {localStorage.getItem('token') ?
                            <Link className="btn btn-outline-primary mx-1" role="button" onClick={handleout}>Log-out</Link>
                            : <form className="d-flex">
                                <Link className="btn btn-outline-primary" to="/login" role="button">Login</Link>
                                <Link className="btn btn-outline-primary my-1" to="/signup" role="button">Signup</Link>
                            </form>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
