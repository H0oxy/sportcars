import {NavLink as Link} from "react-router-dom";
import React from "react";

const Header = ({isAuthenticated, logout}) => {
    let loginLink, loginTitle, loginHandler;
    loginLink = "/login";
    loginTitle = "login";
    if (isAuthenticated) {
        loginLink = "/logout";
        loginTitle = "logout";
        loginHandler = logout;
    }
    return (

        <header className="navbar navbar-expand-lg navbar-dark bg-light bg-gragient">

                        <Link to={"/"} className="navbar-brand text-dark m-2">Sportcars</Link>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link to={"/cars"} className="btn btn-outline-dark m-2">Cars</Link>

                            </li>
                            <div className="nav-item">
                                <Link to={"/users"} className="btn btn-outline-dark m-2">Users</Link>
                            </div>
                            <div className="nav-item">

                                <Link to={loginLink} className="btn btn-outline-dark m-2" onClick={loginHandler}>{loginTitle}</Link>
                            </div>
                        </ul>
                    </div>
                </div>



        </header>

    )
}

export default Header;