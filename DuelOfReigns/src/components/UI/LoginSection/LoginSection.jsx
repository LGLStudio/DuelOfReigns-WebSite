import React from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import { Link } from "react-router-dom";

import './LoginSection.css'; // Assurez-vous d'ajouter le CSS approprié pour le style

import imgSrc from '../../../assets/images/boardgame-back.jpg'

const LoginSection = () => {
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
                            <h2>Bon Retour!</h2>
                            <p>Vous n'avez pas de compte ? <span><Link to="/register">Inscrivez-vous</Link></span></p>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-4   ">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn__account">Se Connecter</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginSection;
