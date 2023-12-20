import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {Link} from "react-router-dom";

import './HeroSection.css';

import heroImg from '../../../assets/images/hero-img.png';
import crownImg from '../../../assets/images/crown.png';
import {LAUNCHER_URL} from "../../../utils/misc.js";
import {t} from "i18next";

const HeroSection = () => {
    return <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6' className="d-flex align-items-center">
                    <div className="hero__content">
                        <h2>
                            {t('home.HeroSection.title')}
                        </h2>
                        <p>{t('home.HeroSection.paragraph.part_1')} <b><i>Duel of Reigns</i></b>, {t('home.HeroSection.paragraph.part_2')}
                        </p>
                        <div className="hero__btns d-flex align-items-center gap-4">
                            <Link to={LAUNCHER_URL}>
                                <Button
                                    color={"warning"}
                                    outline={true}
                                    className="download__btn d-flex align-items-center gap-2">
                                    <i className="ri-download-line"></i>
                                    Télécharger
                                </Button>
                            </Link>
                            <Link to="/tutorial">
                                <Button
                                    outline={true}
                                    color={"warning"}
                                    className=" tutorial__btn d-flex align-items-center gap-2">
                                    <i className="ri-ruler-line"></i>
                                    Tutoriel
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={crownImg} className="w-100" alt={""}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default HeroSection;