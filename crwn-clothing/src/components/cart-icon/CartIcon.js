import { createStructuredSelector } from "reselect";
import "./cartIcon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/Cart.action";
import { AiOutlineShopping } from "react-icons/ai";
import { selectCartItemsCount } from "../../redux/cart/Cart.selector";

function CartIcon({ toggleCartHidden, itemCount }) {
   return (
      <div className="cart-icon" onClick={toggleCartHidden}>
         <AiOutlineShopping className="shopping-icon">
            {itemCount}
         </AiOutlineShopping>
         <span className="item-count">{itemCount}</span>
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => {
      dispatch(toggleCartHidden());
   },
});

//connect is a higher order function. A function that takes in a component
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
