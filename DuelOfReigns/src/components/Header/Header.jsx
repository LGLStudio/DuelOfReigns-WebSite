import {useRef, useState} from "react";
import {useAuth} from "../../AuthProvider";
import {Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {NavLink, Link} from "react-router-dom";

import './Header.css';
import 'remixicon/fonts/remixicon.css';
import {useTranslation} from "react-i18next";

/**
 * Header component renders the navigation bar of the application, including links to various sections
 * like Home, Library, Tutorial, Marketplace, Contact, Inventory, Profile, and Bank. It also includes
 * login/logout functionality, language selection, and a responsive mobile menu toggle.
 *
 * @component
 * @returns {JSX.Element} - The rendered header component with navigation and user actions.
 */
const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const auth = useAuth();
    const menuRef = useRef(null);
    const {t, i18n} = useTranslation();
    const toggleMenu = () => menuRef.current.classList.toggle('active__menu');
    /**
     * Changes the language based on the value provided in the event object.
     *
     * @param initials
     */
    const changeLanguage = (initials) => {
        i18n.changeLanguage(initials);
    };
    return <header className="header">
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className="d-flex gap-2 align-items-center">
                        <Link to='/home'>
                            <span>
                                <i className="ri-vip-crown-fill"></i>
                            </span>
                        </Link>
                    </h2>
                </div>

                <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/home"
                                     className={navClass => navClass.isActive ? 'active' : ''}>{t("Accueil")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/library"
                                     className={navClass => navClass.isActive ? 'active' : ''}>{t("Bibliothèque")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/tutorial"
                                     className={navClass => navClass.isActive ? 'active' : ''}>{t("Tutoriel")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/market"
                                     className={navClass => navClass.isActive ? 'active' : ''}>{t("Marketplace")}</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/contact"
                                     className={navClass => navClass.isActive ? 'active' : ''}>{t("Contact")}</NavLink>
                        </li>
                        {auth.user ?
                            <>
                                <li className="nav__item">
                                    <NavLink to="/inventory"
                                             className={navClass => navClass.isActive ? 'active' : ''}>{t("Inventaire")}</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink
                                        to="/profile"
                                        className={navClass => navClass.isActive ? 'active' : ''}
                                    >
                                        {t("Profil")}
                                    </NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink
                                        to="/bank"
                                        className={navClass => navClass.isActive ? 'active' : ''}
                                    >
                                        {t("Banque")}
                                    </NavLink>
                                </li>
                            </>
                            : <></>
                        }
                        <li>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
                                <DropdownToggle
                                    style={{
                                        border: "none",
                                        background: "none",
                                        color: "black",
                                        marginRight: "0.33rem",
                                    }}
                                    caret
                                >
                                    🌍 {i18n.language}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>change language</DropdownItem>
                                    <DropdownItem onClick={() => changeLanguage("fr")}>🌍Français</DropdownItem>
                                    <DropdownItem onClick={() => changeLanguage("en")}>🌍English</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>

                <div className="nav__right d-flex align-items-center gap-5">
                    {auth.user ? (
                        <Button
                            onClick={() => auth.signout()}
                            color="danger"
                            outline
                            className="btn d-flex gap-2 align-items-center">
                            <span>
                                <i className="ri-account-circle-line"></i>
                            </span>
                            {t("Déconnexion")}
                        </Button>
                    ) : (
                        <>
                            <Link to='/login'>
                                <Button color="warning"
                                        outline
                                        className="btn d-flex gap-2 align-items-center">
                            <span>
                                <i className="ri-account-circle-line"></i>
                            </span>
                                    {t("Connexion")}
                                </Button>
                            </Link>
                            <Link to='/register'>
                                <Button color="warning"
                                        outline
                                        className="btn d-flex gap-2 align-items-center">
                            <span>
                                <i className="ri-account-circle-line"></i>
                            </span>
                                    {t("Inscription")}
                                </Button>
                            </Link>
                        </>
                    )}
                    <span className="mobile__menu">
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
};

export default Header;
