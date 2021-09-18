import { createStructuredSelector } from "reselect";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/Cart.selector";
import { selectCurrentUser } from "../../redux/user/User.selector";

function Header({ currentUser, hidden }) {
   return (
      <div className="header">
         <Link className="logo-container" to="/">
            <div className="logo">Logo</div>
         </Link>

         <div className="options">
            <Link className="option" to="/shop">
               Shop
            </Link>
            <Link className="option" to="/contact">
               Contact
            </Link>

            {currentUser ? (
               <div className="option" onClick={() => auth.signOut()}>
                  Sign Out
               </div>
            ) : (
               <Link className="option" to="/signin">
                  Sign in
               </Link>
            )}
            <CartIcon />
         </div>
         {hidden ? "" : <CartDropdown />}
      </div>
   );
}

//to use state in the component
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
