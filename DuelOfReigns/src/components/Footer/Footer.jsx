import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, List, ListGroupItem } from "reactstrap";

import "./Footer.css";

const Footer = (props) => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='6' sm='6'>
                    <div className="logo">
                        <h2 className="d-flex gap-2 align-items-center">
                            <span>
                                <i class="ri-vip-crown-fill"></i>
                            </span> Duel of Reigns
                        </h2>
                        <p>Plongez dans l'univers de Duel of Reigns, un jeu de cartes stratégique établi au cœur d'un monde héroïque-fantaisie.</p>
                    </div>
                </Col>

                <Col lg='2' md='3' sm='6'>
                    <h5>Mon Compte</h5>
                    <ListGroup className="list__group">
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6'>
                    <h5>Ressources</h5>
                    <ListGroup className="list__group">
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6'>
                    <h5>Studio</h5>
                    <ListGroup className="list__group">
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                        <ListGroupItem className="list__item">
                            <Link to='#'>Editer</Link>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='3' md='6' sm='6'>
                    <h5>Newsletter</h5>
                    <input type="text" className="newsletter" placeholder="Adresse Mail" />
                    <div className="social__links d-flex gap-3 align-items-center">
                        <span><Link to="#"><i class="ri-facebook-fill"></i></Link></span>
                        <span><Link to="#"><i class="ri-instagram-fill"></i></Link></span>
                        <span><Link to="#"><i class="ri-twitter-x-fill"></i></Link></span>
                        <span><Link to="#"><i class="ri-discord-fill"></i></Link></span>
                        <span><Link to="#"><i class="ri-telegram-fill"></i></Link></span>
                    </div>
                </Col>
                <Col lg='12' className="mt-4 text-center">
                    {" "}
                    <p className="copyright">Copyright 2023, Developed by LGL Studio. Tous droits réservés.</p>
                    {" "}
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;