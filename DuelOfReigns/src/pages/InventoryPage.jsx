import {Col, Container} from "reactstrap";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import {useAuth} from "../AuthProvider.jsx";
import Skin from "../components/Skin/Skin.jsx";

const InventoryPage = () => {
    const auth = useAuth();
    const skins = auth.user.skins
    const skinsOnSell = skins.filter(skin => skin.skinIsOnSale)

    return (
        <Container fluid>
            <BlockHeader/>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                <Col lg="6">
                    Tous mes skins
                    {skins.map(skin => (
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
                    {skinsOnSell.map(skin => (
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
