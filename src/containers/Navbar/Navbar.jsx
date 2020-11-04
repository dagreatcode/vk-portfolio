import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Vincent Kendrick Portfolio</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>     */}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Link</a> */}
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Link</a> */}
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;