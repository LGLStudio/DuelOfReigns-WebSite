import React from "react";
import {Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import {Link} from "react-router-dom";

import demonImg from '../../../assets/images/card-demon-placeholder.png';
import orcImg from '../../../assets/images/card-orc-placeholder.png';
import elveImg from '../../../assets/images/card-elves-placeholder.png';
import humanImg from '../../../assets/images/card-human-placeholder.png';

import './LibraryFaction.css';

const LibraryFaction = () => {
    return <section className="library__section">
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <div className="live__auction__top d-flex align-items-center justify-content-between">
                        <h2>Factions</h2>
                    </div>
                    <p className="text-right">Il existe plusieurs factions au sein de Duel Reigns. Chacune d'entre elles
                        apporte sa propre perspective, ses motivations et son rôle unique. Ces factions peuvent former
                        des alliances ou se lancer dans des affrontements épiques. Voici un aperçu des principales
                        factions que vous pouvez rencontrer.</p>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <Card
                        className="single__hero__card"
                        style={{border: "none"}}
                    >
                        <CardImg top src={demonImg} className="w-100" alt="Démons"/>

                        <CardBody>
                            <CardTitle tag="h5" className="card__title text-center">Démons</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <Card
                        className="single__hero__card"
                        style={{border: "none"}}
                    >
                        <CardImg top src={orcImg} className="w-100" alt="Orcs"/>
                        <CardBody>
                            <CardTitle tag="h5" className="card__title text-center">Orcs</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <Card
                        className="single__hero__card"
                        style={{border: "none"}}
                    >
                        <CardImg top src={elveImg} className="w-100" alt="Elfes"/>
                        <CardBody>
                            <CardTitle tag="h5" className="card__title text-center">Elfes</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <Card
                        className="single__hero__card"
                        style={{border: "none"}}
                    >
                        <CardImg top src={humanImg} className="w-100" alt="Humains"/>
                        <CardBody>
                            <CardTitle tag="h5" className="card__title text-center">Humains</CardTitle>
                        </CardBody>
                    </Card>
                </Col>

                {/*<Col lg='3' md='4' sm='6'>*/}
                {/*    <div className="single__hero__card">*/}
                {/*        <div className="card__img">*/}
                {/*            <img src={demonImg} className="w-100"/>*/}
                {/*        </div>*/}
                {/*        <div className="card__content">*/}
                {/*            <h5 className="card__title text-center">Démons</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col lg='3' md='4' sm='6'>*/}
                {/*    <div className="single__hero__card">*/}
                {/*        <div className="card__img">*/}
                {/*            <img src={orcImg} className="w-100"/>*/}
                {/*        </div>*/}
                {/*        <div className="card__content">*/}
                {/*            <h5 className="card__title text-center">Orcs</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col lg='3' md='4' sm='6'>*/}
                {/*    <div className="single__hero__card">*/}
                {/*        <div className="card__img">*/}
                {/*            <img src={elveImg} className="w-100"/>*/}
                {/*        </div>*/}
                {/*        <div className="card__content">*/}
                {/*            <h5 className="card__title text-center">Elfes</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col lg='3' md='4' sm='6'>*/}
                {/*    <div className="single__hero__card">*/}
                {/*        <div className="card__img">*/}
                {/*            <img src={humanImg} className="w-100"/>*/}
                {/*        </div>*/}
                {/*        <div className="card__content">*/}
                {/*            <h5 className="card__title text-center">Humains</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}


                <Col lg='12'>
                    <Button
                        color={"secondary"}
                        outline={true}
                        className="btn__area text-center">
                        <Link to='/library'>
                            <span><i className="ri-book-mark-line"></i>Explorer</span>
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>
};

export default LibraryFaction;