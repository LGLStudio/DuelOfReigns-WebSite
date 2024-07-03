function BuyButtonComponent(key) {
    return (
        <stripe-buy-button
            buy-button-id="{{BUY_BUTTON_ID}}"
            publishable-key={key}
            // publishable-key={`${import.meta.env.PUBLISHABLE_KEY}`}
        >
        </stripe-buy-button>
    );
}

export default BuyButtonComponent;