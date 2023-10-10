import React from "react";
import { Container } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";

import './Header.css';
import 'remixicon/fonts/remixicon.css';

const Header = (props) => {
    return <header className="header">
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className="d-flex gap-2 align-items-center">
                        <span>
                            <i class="ri-vip-crown-fill"></i>
                        </span>
                    </h2>
                </div>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/home" className={ navClass => navClass.isActive ? 'active' : ''}>Accueil</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/library" className={ navClass => navClass.isActive ? 'active' : ''}>Bibliothèque</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/tutorial" className={ navClass => navClass.isActive ? 'active' : ''}>Tutoriel</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/market" className={ navClass => navClass.isActive ? 'active' : ''}>Marketplace</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/contact" className={ navClass => navClass.isActive ? 'active' : ''}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav__right d-flex align-items-center gap-5">
                    <button className="btn d-flex gap-2 align-items-center">
                        <span>
                            <i class="ri-account-circle-line"></i>
                        </span>
                        <Link to='/register'>Inscription</Link>
                    </button>
                    
                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>                
                </div>
            </div>
        </Container>
    </header>
};

export default Header;