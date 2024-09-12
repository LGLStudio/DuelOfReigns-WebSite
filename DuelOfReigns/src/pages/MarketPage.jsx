import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import SkinBuy from "../components/SkinBuy/SkinBuy.jsx";
import {useAuth} from "../AuthProvider.jsx";
import {Button, Spinner} from "reactstrap";
import {useNavigate} from "react-router-dom";
import ecopocoHead from "../../src/assets/images/ecopoco_face-removebg.png";
import ecopocoTail from "../../src/assets/images/ecopoco_pile-removebg.png";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import {useEffect, useState} from "react";

/**
 * MarketPage component displays a marketplace where users can view and purchase skins available for sale.
 * The component fetches skin sales data from a Firestore database, including details about each skin and the seller.
 * It also provides an option for authenticated users to navigate to a selling page to list their own items for sale.
 *
 * @component
 * @returns {JSX.Element} - The rendered marketplace page with skin items for sale and user interactions.
 */
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

                const skinsList = await Promise.all(
                    querySnapshot.docs
                        .filter(docSnapshot => {
                            const data = docSnapshot.data();
                            return !('user_buyer' in data) || data.user_buyer === null;
                        })
                        .map(async (docSnapshot) => {
                            const data = docSnapshot.data();
                            const docId = docSnapshot.id;

                            const skinDocRef = data.skin_property; // Référence au document skin_property
                            const skinDoc = await getDoc(skinDocRef);
                            const skinData = skinDoc.exists() ? skinDoc.data() : null;

                            let skinDetails = null;

                            if (skinData && skinData.skin) {
                                const detailedSkinDoc = await getDoc(skinData.skin);
                                skinDetails = detailedSkinDoc.exists() ? detailedSkinDoc.data() : null;
                            }

                            const skinPropId = skinDoc.id;

                            const userSellerDoc = await getDoc(data.user_seller);
                            const userSellerData = userSellerDoc.exists() ? userSellerDoc.data() : null;

                            return {
                                skin_sale: {
                                    date_on_sale: data.date_on_sale,
                                    fee: data.fee,
                                    price_without_commission: data.price_without_commission,
                                    skin_properties: skinPropId,
                                    user_seller: userSellerDoc.id,
                                    id: docId
                                },
                                skin: skinDetails,
                                skin_properties: {
                                    is_on_sale: skinData.is_on_sale,
                                    id: skinPropId,
                                    skin_id: skinPropId
                                },
                                user_seller: userSellerData
                            };
                        })
                );

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
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {auth?.user ?
                    <div>
                        Mes ecopocos : {auth.user.coins || 0} <img width={20} src={ecopocoTail} alt={"ecopoco-icon"}/>
                    </div>
                    :
                    <></>}
                <div>
                    Les différents cosmétiques en ventes :
                </div>
            </div>
            <div>

            </div>
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
                                <SkinBuy item={item}/>
                            </div>
                        ))}
                    </>
                    : <Spinner/>}
            </div>
        </>
    )
};

export default MarketPage;
