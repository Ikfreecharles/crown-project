import { CartActionTypes } from "./Cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
   cartItems: [],
   hidden: true,
};

const CartReducer = (currentState = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...currentState,
            hidden: !currentState.hidden,
         };

      case CartActionTypes.ADD_ITEM:
         return {
            ...currentState,
            cartItems: addItemToCart(currentState.cartItems, action.payload),
         };

      case CartActionTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...currentState,
            cartItems: currentState.cartItems.filter(
               (cartItem) => cartItem.id !== action.payload.id
            ),
         };

      case CartActionTypes.REMOVE_ITEM:
         return {
            ...currentState,
            cartItems: removeItemFromCart(
               currentState.cartItems,
               action.payload
            ),
         };

      default:
         return currentState;
   }
};

export default CartReducer;
