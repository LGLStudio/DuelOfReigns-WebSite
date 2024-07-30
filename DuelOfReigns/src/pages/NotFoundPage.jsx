import {Container, Row} from "reactstrap";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";

const NotFoundPage = () => {
    console.log("404")
    return (
        <Container fluid>
            <BlockHeader/>
            <Row style={{padding: '5rem', height: '100px'}}>
                404
            </Row>
        </Container>
    );
};

export default NotFoundPage;
