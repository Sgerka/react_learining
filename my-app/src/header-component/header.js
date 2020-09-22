import React from 'react';
import logo from '../logo.svg';
import './header.scss'

function Header() {
    return (
        <header>
            <nav>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-5 col-md-4 d-flex justify-content-start">
                            <a href="#">
                                <div id="top-logo-placeholder">
                                    <img id="top-logo" src={logo} alt="Logo"/>
                                    <span id="top-title"> Share Creds </span>
                                </div>
                            </a>
                        </div>
                        <div className="col-7 col-md-8 d-flex justify-content-end">
                            <div id="top-nav">
                                <a className="top-nav-item" href="#"> How It Works </a>
                                <a className="top-nav-item" href="#"> About Us </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
