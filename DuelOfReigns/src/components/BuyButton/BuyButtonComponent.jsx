function BuyButtonComponent(key) {
    return (
        <stripe-buy-button
            buy-button-id={""}
            publishable-key={key}
        >
        </stripe-buy-button>
    );
}

export default BuyButtonComponent;