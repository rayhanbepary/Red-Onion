import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-first-col">
                        <img src={Logo} alt="logo" width="40%" />
                        <p>Lorem ipsum,dolor sit amet consectetur adipisicing elit. Porro, veniam minus. adipisicing elit. Porro, veniam minus.</p>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="row">
                            <div className="col-md-6 footer-sec-col">
                                <ul >
                                    <li>
                                        <Link className="link" to="#">About online food</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">Read our blog</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">Sign up to deliver</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">Add your restaurant</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 footer-trd-col">
                                <ul>
                                    <li>
                                        <Link className="link" to="#">Get help</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">Read FAQs</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">View all cities</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="#">Restaurants near me</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{paddingTop: '90px'}}>
                    <div className="col-md-4">
                        <p style={{color: '#775151',fontSize: '14px'}}>Copyright &copy; {new Date().getFullYear()} online food</p>
                    </div>
                    <div className="col-md-5 footer-last-col ml-auto">
                            <ul>
                                <li>
                                    <Link to="#" className="nav-link">Privacy Policy.</Link>
                                </li>
                                <li>
                                    <Link to="#" className="nav-link">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to="#" className="nav-link">Pricing</Link>
                                </li>
                            </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;