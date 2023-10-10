import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import demonImg from '../../../assets/images/card-demon-placeholder.png';
import orcImg from '../../../assets/images/card-orc-placeholder.png';
import elveImg from '../../../assets/images/card-elves-placeholder.png';
import humanImg from '../../../assets/images/card-human-placeholder.png';

import './LibraryFaction.css';

const LibraryFaction = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <div className="live__auction__top d-flex align-items-center justify-content-between">
                        <h3>Bibliothèque</h3>
                        <span><Link to='/library'>Explorer</Link></span>
                    </div>
                </Col>

                <Col lg='3'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={demonImg} className="w-100"/>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={orcImg} className="w-100"/>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={elveImg} className="w-100"/>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__hero__card">
                        <div className="card__img">
                            <img src={humanImg} className="w-100"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default LibraryFaction;