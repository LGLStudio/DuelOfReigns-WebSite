import {Col, Container} from "reactstrap";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import {useAuth} from "../AuthProvider.jsx";
import SkinSell from "../components/SkinSell/SkinSell.jsx";
import Skin from "../components/Skin/Skin.jsx";

/**
 * InventoryPage component displays the user's skins, including those that are currently for sale.
 * It separates the skins into two categories: all skins owned by the user and skins currently listed for sale.
 *
 * @component
 * @returns {JSX.Element} - The rendered inventory page with user's skins and skins on sale.
 */
const InventoryPage = () => {
    const auth = useAuth();
    const skins = auth.user.skins
    const skinsOnSell = skins?.filter(skin => skin.skinIsOnSale)

    return (
        <Container fluid>
            <BlockHeader/>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                <Col lg="6">
                    Tous mes skins
                    {skins && skins.map(skin => (
                        <div style={{
                            width: "200px",
                            margin: "1rem"
                        }}
                             key={Math.random()}
                        >
                            <Skin item={skin}/>
                        </div>
                    ))}
                </Col>
                <Col lg="6">
                    Mes skins en vente
                    {skinsOnSell && skinsOnSell.map(skin => (
                        <div style={{
                            width: "200px",
                            margin: "1rem"
                        }}
                             key={Math.random()}
                        >
                            <Skin item={skin}/>
                        </div>
                    ))}
                </Col>
            </div>
        </Container>
    );
};

export default InventoryPage;
