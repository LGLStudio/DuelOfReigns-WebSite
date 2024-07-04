import React from "react";
import {Container, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

import SkinCard from "../SkinCard/SkinCard";
import imgURL from '../../../assets/images/boardgame-back.jpg';
import './TrendingSkinSection.css';

const TrendingSkinSection = () => {
    const fakeItems = []
    for (let i = 0; i < 10; i++) {
        fakeItems.push(
            {
                name: `nom_${i + 1}`,
                price: `${i + Math.floor(Math.random() * 10)}`,
                date: `${new Date().toLocaleDateString("fr")}`,
                id: `${i}`
            }
        )
    }
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
                {fakeItems.length > 0 ?
                    fakeItems.map(item => (
                        <Col lg='3' md='4' sm='6' className="mb-4">
                            <SkinCard item={item}/>
                        </Col>
                    ))
                    : <p>Pas d'article en vente.</p>}
            </Row>
        </Container>
    </section>
};

export default TrendingSkinSection;