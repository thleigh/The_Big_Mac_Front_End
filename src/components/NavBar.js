import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/#Welcome" >Affirmations
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto">
                        {
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" onClick={props.handleLogout} className="nav-link text-info">Logout</NavLink>
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