import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Col, Container, Row, Spinner} from "reactstrap";
import {useAuth} from "../AuthProvider.jsx";

const BuyButtonComponent = ({publishableKey}) => {
    const [loading, setLoading] = useState(false);
    const [stripe, setStripe] = useState(null);

    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe(publishableKey));
        } else {
            console.error('Stripe.js not loaded');
        }
    }, [publishableKey]);

    const handleClick = async () => {
        if (!stripe) {
            console.error('Stripe.js not initialized');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_STRIPE_SESSION}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: 'some_payment_method_id'}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const {id: sessionId} = data;

            console.log('Session ID:', sessionId);

            const result = await stripe.redirectToCheckout({sessionId});

            if (result.error) {
                console.error('Error redirecting to checkout:', result.error.message);
                setLoading(false);
            }

        } catch (error) {
            console.error('Error creating checkout session:', error);
            setLoading(false);
        }
    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? 'Loading...' : 'Acheter quelqes Ecopoco'}
        </Button>
    );
};

const BankPage = () => {
    const auth = useAuth();
    const currentUser = auth.user;
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

    return (
        <Container fluid>
            <Row style={{padding: '5rem', height: '100px'}}>
                <Col lg="6">
                    <span style={{color: 'black'}}>Solde actuel : {currentUser?.coins}</span>
                </Col>
                <Col lg="6">
                    {stripeKey ? (
                        <BuyButtonComponent publishableKey={stripeKey}/>
                    ) : (
                        <div>
                            <p>Chargement</p>
                            <Spinner/>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default BankPage;
