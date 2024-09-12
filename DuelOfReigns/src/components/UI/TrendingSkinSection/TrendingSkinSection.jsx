import {useEffect, useState} from "react";
import {Container, Row, Col} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";

import './TrendingSkinSection.css';
import {collection, getDoc, getDocs, getFirestore} from "firebase/firestore";
import {useAuth} from "../../../AuthProvider.jsx";
import SkinBuy from "../../SkinBuy/SkinBuy.jsx";

const TrendingSkinSection = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const user = auth.user
    const [skins, setSkins] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const getSkins = async () => {
            try {
                const skinsRef = collection(db, 'skin_sales');
                const querySnapshot = await getDocs(skinsRef);

                const skinsList = await Promise.all(querySnapshot.docs.map(async (docSnapshot) => {
                    const data = docSnapshot.data();

                    if (!data || !data.skin || !data.user_seller) {
                        console.error(`Data or required references are missing for document: ${docSnapshot.id}`);
                        return null;
                    }

                    const skinDoc = await getDoc(data.skin);
                    const skinData = skinDoc.exists() ? skinDoc.data() : null;

                    const userSellerDoc = await getDoc(data.user_seller);
                    const userSellerData = userSellerDoc.exists() ? userSellerDoc.data() : null;

                    if (!skinData || !userSellerData) {
                        console.error(`Invalid skin or user seller data for document: ${docSnapshot.id}`);
                        return null;
                    }

                    return {
                        ...data,
                        skin: skinData,
                        user_seller: userSellerData
                    };
                }));

                setSkins(skinsList.filter(skin => skin !== null));
            } catch (error) {
                console.error("Error fetching skins for sale: ", error);
            }
        };

        getSkins().then();
    }, [db]);


    return <section className="skin__section">
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="trending__title mb-5 d-flex align-items-center justify-content-between">
                        <h2>Skins en Vente</h2>
                        <Link to='/market'>
                            <span className="btn"><i className="ri-t-shirt-line"></i> Explorer</span>
                        </Link>
                    </div>
                </Col>
                {skins.length > 0 ?
                    skins.map(skin => (
                        <Col lg='3' md='4' sm='6' className="mb-4">
                            <SkinBuy item={skin}/>
                        </Col>
                    ))
                    : <p>Pas d'article en vente.</p>}
            </Row>
        </Container>
    </section>
};

export default TrendingSkinSection;
