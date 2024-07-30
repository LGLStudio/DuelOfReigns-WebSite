import {Col, Container, Row} from "reactstrap";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";

const InventoryPage = () => {
    return (
        <Container fluid>
            <BlockHeader/>
            <Row style={{padding: '5rem', height: '100px'}}>
                <Col lg="6">
                    Mon inventaire
                </Col>
                <Col lg="6">
                    Mes skins
                </Col>
            </Row>
        </Container>
    );
};

export default InventoryPage;
