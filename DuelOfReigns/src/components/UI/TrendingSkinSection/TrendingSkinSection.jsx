import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import SkinCard from "../SkinCard/SkinCard";
import imgURL from '../../../assets/images/boardgame-back.jpg';
import './TrendingSkinSection.css';

const TrendingSkinSection = () => {
    return <section className="skin__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="trending__title mb-5 d-flex align-items-center justify-content-between">
                        <h2>Skin en Vente</h2>
                        <Link to='/market'>
                            <span className="btn"><i className="ri-t-shirt-line"></i> Explorer</span>
                        </Link>
                    </div>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
                <Col lg='3' md='4' sm='6' className="mb-4">
                    <SkinCard/>
                </Col>
            </Row>
        </Container>
    </section>
};

export default TrendingSkinSection;