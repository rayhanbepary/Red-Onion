import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { FaAlignRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo2.png';

const Navbar = ({cart}) => {

    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand logo" to="/">
                                <img src={Logo} alt="logo" width='20%'/>
                            </Link>
                            <button className="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <FaAlignRight className="nav-icon"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName='active' to="/cart">
                                            <span> 
                                                <FiShoppingCart/>
                                                <span className="cart-length">{cart.length}</span>
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName='active' to="/login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link signup" activeClassName='active' to="/sign-up">Sign up</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;