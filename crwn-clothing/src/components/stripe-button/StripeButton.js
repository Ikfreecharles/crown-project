import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearCart } from "../../redux/cart/Cart.action";
import { selectCartItems } from "../../redux/cart/Cart.selector";

function StripeButton({ price, clearCart }) {
  const priceForStripe = price * 100;
  const PUBLISHABLE_KEY =
    "pk_test_51JaYgiLReOHxoLxPArxpRf7Sbw7w4PY3GyVBWip5J22nmH3Y9TCWWsUfOL0Xv6WxSPoOyJWG1kdqi3mKEzF2kZMf00H7GMKuNe";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
    clearCart();
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

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => {
    dispatch(clearCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StripeButton);
