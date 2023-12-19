import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from 'reactstrap';
import {Link, redirect, useLocation} from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import './LoginSection.css';

import imgSrc from '../../../assets/images/boardgame-back.jpg'
import {useTranslation} from "react-i18next";

const RegisterSection = () => {
    const [email, setEmail] = useState(""),
        [confirmEmail, setConfirmEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState(""),
        [pseudo, setPseudo] = useState(""),
        [message, setMessage] = useState(""),
        {t} = useTranslation(),
        emailRegex = /^\S+@\S+\.\S+$/,
        passwordsMatch = password === confirmPassword,
        isValidEmail = (email) => emailRegex.test(email),
        auth = getAuth();

    /**
     * Handles user registration by creating a new user account and updating their pseudo.
     *
     * @param {React.FormEvent} e - the form event that triggers the registration process.
     * @return {void}.
     */
    const handleRegister = (e) => {
        e.preventDefault();
        if (!emailRegex.test(email)) {
            setMessage(`${t("register.form.error")}`);
            return;
        }
        if (!passwordsMatch) {
            setMessage(`${t("register.form.error.passwordsDontMatch")}`);
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {displayName: pseudo})
                    .then((res) => {
                        redirect(`/home`);
                    })
                    .catch((error) => {
                        setMessage(
                            `${t("register.form.error.displayName")}} ${error} ${
                                error.message
                            }`
                        );
                    });
                setMessage(`${t("register.form.success")}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(`ERREUR ${errorCode} ${errorMessage}`);
            });
    };

    return (
        <section className="login__section">
            <Container fluid>
                <Row>
                    <Col lg="6" className="image__section">
                        <div className="login__image">
                            <img src={imgSrc} alt="Image de connexion" className="w-100"/>
                        </div>
                    </Col>
                    <Col lg="6" className="form__section d-flex align-items-center">
                        <div className="login__form">
                            <h2>Bienvenue!</h2>
                            <p>Vous avez déjà un compte ? <span><Link to="/login">Connectez-Vous</Link></span></p>
                            <p>{message}</p>
                            <Form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="pseudo" className="form-label">Pseudonyme</label>
                                    <input onChange={(e) => setPseudo(e.target.value)} type="text"
                                           className="form-control" id="pseudo"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email"
                                           className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmEmail" className="form-label">Confirme adresse Mail</label>
                                    <input onChange={(e) => setConfirmEmail(e.target.value)} type="email"
                                           className="form-control" id="confirmEmail"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password"
                                           className="form-control" id="password"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de
                                        passe</label>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password"
                                           className="form-control" id="confirmPassword"/>
                                </div>
                                <Button
                                    color={"warning"}
                                    outline={true}
                                    type="submit"
                                    className="btn__account">
                                    S'inscrire
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RegisterSection;
