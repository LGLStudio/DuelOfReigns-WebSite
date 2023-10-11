import React from "react";
import { Container, Row, Col } from "reactstrap";

import avatarURL from '../../../assets/images/hero-img.jpg'

import './RankSection.css';

const RankSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="ranking__section-title mb-5">
                        <h2>Classement</h2>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='2' md='3' sm='4' xs='6' className="mb-4">
                    <div className="single__rank-card d-flex align-items-center gap-3">
                        <div className="rank__img">
                            <img src={avatarURL} className="w-100"/>
                        </div>

                        <div className="rank__content">
                            <h6>John Doe!</h6>
                            <h6>253 Victoires</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default RankSection;