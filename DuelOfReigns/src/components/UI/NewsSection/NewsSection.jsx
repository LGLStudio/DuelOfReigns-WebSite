import React, {useEffect, useState} from "react";
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import './NewsSection.css';
import crownImg from '../../../assets/images/crown.png';
import {getAppInstance} from "../../../utils/firebase.js";

const NewsSection = () => {
    const [newsData, setNewsData] = useState(undefined);

    useEffect(() => {
        if (!newsData) {
            const fetchData = async () => {
                try {
                    const app = await getAppInstance();
                    const db = getFirestore(app);
                    const newsRef = collection(db, 'news');
                    const newsSnapshot = await getDocs(newsRef); //  NewsSection.jsx:19
                    const newsList = newsSnapshot.docs.map(doc => doc.data());
                    setNewsData(newsList);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData().then(r => r);
        }

        return () => {
        }
    }, [])

console.log(newsData)
    return (<section className="news__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="news__section__title">
                        <h2>Dernières Nouveautés</h2>
                    </div>
                </Col>
                {newsData && newsData.map((news, index) => (<Col lg='4' key={index}>
                    <div className="single__news__card">
                        <div className="news__image">
                            <img src={`${news.image}`} alt="Nouvelle Image" className="w-100"/>
                        </div>
                        <div className="news__info">
                            <h3 className="news__title">{news.title}</h3>
                            <p className="news__description">{news.content}</p>
                            <Link to={`/news/${news.title?.replace(/\s+/g, '-').toLowerCase()}`}>En savoir
                                plus
                            </Link>
                        </div>
                    </div>
                </Col>))}
            </Row>
        </Container>
    </section>);
};

export default NewsSection;