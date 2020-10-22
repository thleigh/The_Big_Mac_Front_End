import React from 'react';
import bigmac from '../assets/big-mac.png'
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/Welcome" >The Big Mac Project
                    <img className="NavBigMac" src={bigmac} alt="The Big Mac" width="50" height="50"></img>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto">
                        {
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info" to="/Data">Data</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info" to="/Contact">Contact Us</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;