// Intégration du Système de Paiement
// Configuration Stripe :
// Endpoints dans Firebase Functions pour gérer les paiements.

const functions = require('firebase-functions');
const stripe = require('stripe')(import.meta.env.VITE_STRIPE_SECRET_KEY);

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
    const amount = data.amount;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
    });
    return paymentIntent.client_secret;
});


