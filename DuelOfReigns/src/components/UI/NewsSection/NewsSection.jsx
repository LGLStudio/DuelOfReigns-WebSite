import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import './NewsSection.css';

import crownImg from '../../../assets/images/crown.png';

const NewsSection = () => {
    const newsData = [
        {
            title: "Nouvelle mise à jour excitante",
            description: "Découvrez les dernières fonctionnalités et améliorations dans notre dernière mise à jour.",
        },
        {
            title: "Événement spécial à venir",
            description: "Participez à l'événement épique qui se déroulera bientôt dans Duel of Reigns.",
        },
        {
            title: "Nouvelles cartes disponibles",
            description: "Explorez notre toute nouvelle collection de cartes avec des pouvoirs incroyables.",
        },
    ];

    return (
        <section className="news__section">
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="news__section__title">
                            <h2>Dernières Nouveautés</h2>
                        </div>
                    </Col>
                    {newsData.map((news, index) => (
                        <Col lg='4' key={index}>
                            <div className="single__news__card">
                                <div className="news__image">
                                    <img src={crownImg} alt="Nouvelle Image" className="w-100" />
                                </div>
                                <div className="news__info">
                                    <h3 className="news__title">{news.title}</h3>
                                    <p className="news__description">{news.description}</p>
                                    <Link to={`/news/${news.title.replace(/\s+/g, '-').toLowerCase()}`}>En savoir plus</Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default NewsSection;