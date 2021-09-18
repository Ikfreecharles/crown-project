import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
   const priceForStripe = price * 100;
   const PUBLISHABLE_KEY =
      "pk_test_51JaYgiLReOHxoLxPArxpRf7Sbw7w4PY3GyVBWip5J22nmH3Y9TCWWsUfOL0Xv6WxSPoOyJWG1kdqi3mKEzF2kZMf00H7GMKuNe";
   const onToken = (token) => {
      console.log(token);
      alert("Payment successful");
   };
   return (
      <StripeCheckout
         label="Pay Now"
         name="CRWN CLOTHING Ltd"
         billingAddress
         shippingAddress
         description={`Your total is ${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={PUBLISHABLE_KEY}
      />
   );
}

export default StripeButton;
