import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import './RoadMapSection.css';

const RoadMapSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h2 className="roadmap__title mb-4">Roadmap</h2>
                </Col>
                <Col lg='3'>
                    <div className="single__roadmap__item">
                        <span><i class="ri-check-double-line"></i></span>
                        <div className="roadmap__item__content">
                            <h5>
                                <Link to='/register'>Créer un Compte</Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores quia blanditiis optio nihil fuga.</p>
                            </h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__roadmap__item">
                        <span><i class="ri-check-double-line"></i></span>
                        <div className="roadmap__item__content">
                            <h5>
                                <Link to='/register'>Créer un Compte</Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores quia blanditiis optio nihil fuga.</p>
                            </h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__roadmap__item">
                        <span><i class="ri-check-double-line"></i></span>
                        <div className="roadmap__item__content">
                            <h5>
                                <Link to='/register'>Créer un Compte</Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores quia blanditiis optio nihil fuga.</p>
                            </h5>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <div className="single__roadmap__item">
                        <span><i class="ri-check-double-line"></i></span>
                        <div className="roadmap__item__content">
                            <h5>
                                <Link to='/register'>Créer un Compte</Link>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, asperiores quia blanditiis optio nihil fuga.</p>
                            </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default RoadMapSection;