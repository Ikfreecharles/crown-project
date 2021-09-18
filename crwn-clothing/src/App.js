import "./App.css";
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from "./redux/user/User.action";
import { selectCurrentUser } from "./redux/user/User.selector";

import HomePage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SigninSignup from "./pages/signin-signup/SigninSignup";
import Checkout from "./pages/checkout/Checkout";
import { toggleCartHidden } from "./redux/cart/Cart.action";
import { selectCartHidden } from "./redux/cart/Cart.selector";

function App({ setCurrentUser, currentUser, toggleCartHidden, hidden }) {
   useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
         if (userAuth) {
            //if there is no user, create the user in the db
            const userRef = await createUserProfileDocument(userAuth);
            //if there is the user, get it from the db
            onSnapshot(userRef, (snapShot) => {
               setCurrentUser({ id: snapShot.id, ...snapShot.data() });
            });
         } else {
            setCurrentUser(userAuth);
         }

         return () => {
            unsubscribeFromAuth();
         };
      });
   }, []);

   return (
      <div onClick={() => !hidden && toggleCartHidden()}>
         <Header />
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/signin" exact>
               {currentUser ? <Redirect to="/shop" /> : <SigninSignup />}
            </Route>
         </Switch>
      </div>
   );
}

//to use state in prop
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
});

//to update the state
const mapDispatchToProps = (dispatch) => ({
   //object goes to a function item : ()=>{}
   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
   toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
