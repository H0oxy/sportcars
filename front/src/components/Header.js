import {BrowserRouter as Router, NavLink as Link} from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to={"/"}>Sportcars</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <div className="nav-link active" aria-current="page"><Link
                                        to={"/cars"}>Cars</Link></div>
                                </li>
                                <div className="nav-item">
                                    <div className="nav-link"><Link to={"/users"}>Users</Link></div>
                                </div>
                            </ul>
                            <span className="navbar-text">
                        </span>
                        </div>
                    </div>
                </nav>


            </header>
        </header>
    )
}

export default Header;