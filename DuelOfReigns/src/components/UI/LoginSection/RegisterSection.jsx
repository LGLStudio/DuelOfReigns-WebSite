import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import './LoginSection.css';
import imgSrc from '../../../assets/images/boardgame-back.jpg';
import { useTranslation } from "react-i18next";

const RegisterSection = () => {
    const [email, setEmail] = useState(""),
        [confirmEmail, setConfirmEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState(""),
        [pseudo, setPseudo] = useState(""),
        [message, setMessage] = useState(""),
        [registered, setRegistered] = useState(false),
        { t } = useTranslation(),
        emailRegex = /^\S+@\S+\.\S+$/,
        passwordsMatch = password === confirmPassword,
        isValidEmail = (email) => emailRegex.test(email),
        auth = getAuth(),
        firestore = getFirestore();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMessage(`${t("register.form.error")}`);
            return;
        }
        if (!passwordsMatch) {
            setMessage(`${t("register.form.error.passwordsDontMatch")}`);
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: pseudo });
            await setDoc(doc(firestore, "users", user.uid), {
                mail: email,
                name: pseudo
            });
            setMessage(`${t("register.form.success")}`);
            setRegistered(true);
        } catch (error) {
            setMessage(`ERREUR ${error.code} ${error.message}`);
        }
    };

    return (
        <section className="login__section">
            <Container fluid>
                <Row>
                    <Col lg="6" className="image__section">
                        <div className="login__image">
                            <img src={imgSrc} alt="Image de connexion" className="w-100" />
                        </div>
                    </Col>
                    <Col lg="6" className="form__section d-flex align-items-center">
                        {registered ? <Toast className={"login__form"}>
                            <ToastHeader>
                                Inscription réussie !
                            </ToastHeader>
                            <ToastBody className={"d-flex flex-column"}>
                                <p>Vous pouvez maintenant vous connecter !</p>
                                <Link to='/login' className={"d-flex align-self-center"}>
                                    <Button color="primary" outline className="btn__account btn btn-outline-warning">
                                        <span>
                                            <i className="ri-account-circle-line"></i>
                                        </span>
                                        login
                                    </Button>
                                </Link>
                            </ToastBody>
                        </Toast> : <div className="login__form">
                            <h2>Bienvenue!</h2>
                            <p>Vous avez déjà un compte ? <span><Link to="/login">Connectez-Vous</Link></span></p>
                            <p className={"login-error"}>{message}</p>
                            <Form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="pseudo" className="form-label">Pseudonyme</label>
                                    <input onChange={(e) => setPseudo(e.target.value)} type="text" className="form-control" id="pseudo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmEmail" className="form-label">Confirme adresse Mail</label>
                                    <input onChange={(e) => setConfirmEmail(e.target.value)} type="email" className="form-control" id="confirmEmail" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirmPassword" />
                                </div>
                                <Button color={"warning"} outline={true} type="submit" className="btn__account">
                                    S'inscrire
                                </Button>
                            </Form>
                        </div>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RegisterSection;
