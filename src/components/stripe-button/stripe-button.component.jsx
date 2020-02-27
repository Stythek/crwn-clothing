import React from "react";
import StripeCheckout from "react-stripe-checkout";

import publishableKeyForStripe from "./stripe.config.js";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = publishableKeyForStripe;

	const onToken = token => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing"
			currency="EUR"
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
