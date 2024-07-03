import React from 'react';
import {useAuth} from "../AuthProvider.jsx";
import {Button, Col, Container, Row, Spinner} from "reactstrap";
import {loadStripe} from '@stripe/stripe-js';
import {Elements, useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import BuyButtonComponent from "../components/BuyButton/BuyButtonComponent.jsx";

const stripePromise = loadStripe(import.meta.env.STRIPE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            const {id} = paymentMethod;
            const response = await fetch(import.meta.env.STRIPE_SESSION, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id
                })
            });
            const session = await response.json();

            const {error: stripeError} = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (stripeError) {
                console.error(stripeError);
            }
        } else {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement/>
            <Button type="submit" disabled={!stripe}>
                Acheter des coins
            </Button>
        </form>
    );
};

const BankPage = () => {
    const auth = useAuth();
    const currentUser = auth.user;
    const stripeKey = import.meta.env.STRIPE_PUBLISHABLE_KEY
    console.log(stripeKey)
    console.log(import.meta.env.TEST)
    return (
        <>
            <Container fluid>
                <Row style={{padding: "5rem", height: "100px"}}>
                    <Col lg="6">
                        <span style={{color: "black"}}>Solde actuel : {currentUser?.coins}</span>
                    </Col>
                    <Col lg="6">
                        {/*<Elements stripe={stripePromise}>*/}
                        {/*    <CheckoutForm/>*/}
                        {/*</Elements>*/}
                        {stripeKey ?
                            <BuyButtonComponent/>
                            :
                            <div>
                                <p>Chargement</p>
                                <Spinner/>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BankPage;
