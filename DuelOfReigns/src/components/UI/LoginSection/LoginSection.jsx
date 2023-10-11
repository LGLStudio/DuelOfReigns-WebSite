import React from "react";
import { Container, Row, Col, Form, Button } from 'reactstrap';
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
                            <h2>Connexion</h2>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Adresse Mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <Button type="submit" className="btn btn-primary">Se connecter</Button>
                            </Form>
                            <p>Vous n'avez pas de compte? <Link to="/register">Inscrivez-vous</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginSection;
