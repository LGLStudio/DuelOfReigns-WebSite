import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import SkinSell from "../components/SkinSell/SkinSell.jsx";
import {useAuth} from "../AuthProvider.jsx";
import {Button, Spinner} from "reactstrap";
import {useNavigate} from "react-router-dom";
import ecopocoHead from "../../src/assets/images/ecopoco_face-removebg.png";
import ecopocoTail from "../../src/assets/images/ecopoco_pile-removebg.png";
import {doc, getDoc, getDocs, getFirestore, collection} from "firebase/firestore";
import {useEffect, useState} from "react";

const MarketPage = () => {
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

                    // Fetch skin details
                    const skinDoc = await getDoc(data.skin);
                    const skinData = skinDoc.exists() ? skinDoc.data() : null;

                    // Fetch user seller details
                    const userSellerDoc = await getDoc(data.user_seller);
                    const userSellerData = userSellerDoc.exists() ? userSellerDoc.data() : null;

                    return {
                        ...data,
                        skin: skinData,
                        user_seller: userSellerData
                    };
                }));

                setSkins(skinsList);
            } catch (error) {
                console.error("Error fetching skins for sale: ", error);
            }
        };

        getSkins().then();
    }, [db]);

    return (
        <>
            <BlockHeader/>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>MarketPlace</div>
                {user ?
                    <Button
                        onClick={() => navigate("/sell")}
                        disabled={!user}
                        primary={true}
                        color="primary"
                    >
                        Vendre un item
                    </Button>
                    : "Veuillez vous connecter pour vendre un item."}
            </div>
            <div>
                {auth?.user ?
                    <div>Mes ecopocos : {auth.user.coins} <img width={20} src={ecopocoTail} alt={"ecopoco-icon"}/></div>
                    : <></>}
            </div>
            Les différents cosmétiques en ventes :
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                {skins ?
                    <>
                        {skins.map(item => (
                            <div style={{
                                width: "200px",
                                margin: "1rem"
                            }}
                                 key={Math.random()}
                            >
                                <SkinSell item={item}/>
                            </div>
                        ))}
                    </>
                    : <Spinner/>}
            </div>
        </>
    )
};

export default MarketPage;