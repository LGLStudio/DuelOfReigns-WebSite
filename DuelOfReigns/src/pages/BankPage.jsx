import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Spinner} from "reactstrap";
import {useAuth} from "../AuthProvider.jsx";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";

/**
 * BuyButtonComponent is a button that initiates a Stripe checkout session
 * when clicked, allowing users to purchase Ecopoco coins. It integrates with
 * Stripe using the provided publishable key.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.publishableKey - The Stripe publishable key used to initialize Stripe.
 * @returns {JSX.Element} - The rendered button component.
 */
const BuyButtonComponent = ({publishableKey}) => {
    const [loading, setLoading] = useState(false);
    const [stripe, setStripe] = useState(null);
    const stripSession = import.meta.env.VITE_STRIPE_SESSION
    const auth = useAuth();
    const uid = auth.user.uid

    useEffect(() => {
        if (window.Stripe) {
            setStripe(window.Stripe(publishableKey));
        } else {
            console.error('Stripe.js not loaded');
        }
    }, [publishableKey]);

    useEffect(() => {

    }, [stripSession])

    /**
     * Handles the button click event to start the Stripe checkout session.
     * It sends a request to the server to create a checkout session and then
     * redirects the user to the Stripe checkout page.
     */
    const handleClick = async () => {
        if (!stripe) {
            console.error('Stripe.js not initialized');
            return;
        }
        setLoading(true);

        try {
            const requestBody = {uid: uid, id: 'some_payment_method_id'};
            const response = await fetch(`${stripSession}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const {id: sessionId} = data;

            const result = await stripe.redirectToCheckout({sessionId});

            if (result.error) {
                setLoading(false);
            }

        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? 'Loading...' : 'Acheter quelqes Ecopoco'}
        </Button>
    );
};

/**
 * BankPage component displays the user's current Ecopoco balance and provides
 * an option to purchase more Ecopoco coins through a Stripe checkout.
 *
 * @component
 * @returns {JSX.Element} - The rendered bank page component.
 */
const BankPage = () => {
    const auth = useAuth();
    const currentUser = auth.user;
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

    return (
        <Container fluid>
            <BlockHeader/>
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
