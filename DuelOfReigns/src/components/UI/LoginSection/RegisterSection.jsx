import React from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import { Link } from "react-router-dom";

import './LoginSection.css'; // Assurez-vous d'ajouter le CSS approprié pour le style

import imgSrc from '../../../assets/images/boardgame-back.jpg'

const RegisterSection = () => {
    return (
        <section className="login__section">
            <Container fluid>
                <Row>
                    {/* Partie de l'image */}
                    <Col lg="6" className="image__section">
                        <div className="login__image">
                            <img src={imgSrc} alt="Image de connexion" className="w-100" />
                        </div>
                    </Col>
                    {/* Partie du formulaire */}
                    <Col lg="6" className="form__section d-flex align-items-center">
                        <div className="login__form">
                            <h2>Bienvenue!</h2>
                            <p>Vous avez déjà un compte ? <span><Link to="/login">Connectez-Vous</Link></span></p>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="pseudo" className="form-label">Pseudonyme</label>
                                    <input type="text" className="form-control" id="pseudo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                                    <input type="password" className="form-control" id="confirmPassword" />
                                </div>
                                <button type="submit" className="btn__account">S'Inscrire</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RegisterSection;
