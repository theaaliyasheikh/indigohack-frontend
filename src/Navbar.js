import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    Indigo
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/UserLogin">
                                                User Login
                                            </NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/ParentForm">
                                                Parent Form
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Crew">
                                                Crew
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;