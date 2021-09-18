import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItem } from "../../redux/cart/Cart.action";
import { selectCartItems } from "../../redux/cart/Cart.selector";
import Button from "../button/Button";
import "./itemCard.styles.scss";

function ItemCard({ item, addItem, cartItem }) {
   const { name, price, imageUrl } = item;

   return (
      <div className="collection-item">
         <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
         ></div>
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
         <Button onClick={() => addItem(item)}>
            {cartItem.find((items) => items.id === item.id)
               ? `ITEM ADDED`
               : `ADD TO CART`}
         </Button>
      </div>
   );
}

const mapStateToProps = createStructuredSelector({
   cartItem: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
   addItem: (item) => {
      dispatch(addItem(item));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
