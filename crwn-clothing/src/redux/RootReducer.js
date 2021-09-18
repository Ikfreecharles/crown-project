import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./user/User.reducer";
import CartReducer from "./cart/Cart.reducer";
import DirectoryReducer from "./directory/Directory.reducer";
import ShopReducer from "./shop/Shop.reducer";

const persistConfig = {
   key: "root",
   storage,
   whitelist: ["cart"],
};

const rootReducer = combineReducers({
   user: UserReducer,
   cart: CartReducer,
   directory: DirectoryReducer,
   shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
