import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import demonImg from '../../../assets/images/card-demon-placeholder.png';
import orcImg from '../../../assets/images/card-orc-placeholder.png';
import elveImg from '../../../assets/images/card-elves-placeholder.png';
import humanImg from '../../../assets/images/card-human-placeholder.png';

import SkinCard from "../SkinCard/SkinCard";

import './LibraryFaction.css';

const LibraryFaction = () => {
    return <section className="library__section">
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <div className="live__auction__top d-flex align-items-center justify-content-between">
                        <h2>Factions</h2>
                    </div>
                    <p className="text-right">Il existe plusieurs factions au sein de Duel Reigns. Chacune d'entre elles apporte sa propre perspective, ses motivations et son rôle unique. Ces factions peuvent former des alliances ou se lancer dans des affrontements épiques. Voici un aperçu des principales factions que vous pouvez rencontrer.</p>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={demonImg} className="w-100"/>
                        </div>
                        <div className="card__content">
                            <h5 className="card__title text-center">Démons</h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={orcImg} className="w-100"/>
                        </div>
                        <div className="card__content">
                            <h5 className="card__title text-center">Orcs</h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={elveImg} className="w-100"/>
                        </div>
                        <div className="card__content">
                            <h5 className="card__title text-center">Elfes</h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={humanImg} className="w-100"/>
                        </div>
                        <div className="card__content">
                            <h5 className="card__title text-center">Humains</h5>
                        </div>
                    </div>
                </Col>
                <Col lg='12'>
                    <div className="btn__area text-center">
                        <Link to='/library'>
                            <span className="btn"><i className="ri-book-mark-line"></i> Explorer</span>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default LibraryFaction;