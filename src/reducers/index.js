import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import pizzaReducer from "./pizzaReducers";
import { addressReducer } from "./addressReducer";
import { searchItems } from "./odersReducer";
import { sidebarReducer } from "./sidebarreducer";
export default combineReducers({
    allPizza:pizzaReducer,
    cart:cartReducer,
    address:addressReducer,
    search:searchItems,
    sidebar:sidebarReducer
})