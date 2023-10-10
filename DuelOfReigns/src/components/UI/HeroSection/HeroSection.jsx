import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import './HeroSection.css';

import heroImg from '../../../assets/images/hero-img.png';
import crownImg from '../../../assets/images/crown.png';

const HeroSection = () => {
    return <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6' className="d-flex align-items-center">
                    <div className="hero__content">
                        <h2>Duel of Reigns</h2>
                        <p>Plongez dans l'univers de Duel of Reigns, un jeu de cartes stratégique établi au cœur d'un monde héroïque-fantaisie. Tissez des alliances stratégiques entre factions, consolidant ainsi votre pouvoir, afin d'imposer votre règne indéfectible !</p>
                        <div className="hero__btns d-flex align-items-center gap-4">
                            <button className="download__btn d-flex align-items-center gap-2">
                                <i class="ri-download-line"></i> 
                                <Link to="https://www.dropbox.com/s/w3clg5ymy64cy64/BuildLauncher.zip?dl=1">Télécharger</Link>
                            </button>
                            <button className=" tutorial__btn d-flex align-items-center gap-2">
                                <i class="ri-ruler-line"></i> 
                                <Link to="/tutorial">Règle du Jeu</Link>
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={crownImg} className="w-100"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default HeroSection;