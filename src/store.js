import {combineReducers} from "redux"
import { createStore, applyMiddleware} from "redux"
// import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";
import { getAllPizzasReducer,addPizzaReducer, getPizzaByIdReducer,updatePizzaReducer, filterPizzasReducer } from "./reducers/pizzaReducers";
import {composeWithDevTools} from "redux-devtools-extension"
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";
import { placeOrderReducer,getUserOrdersReducer, getAllOrdersReducer } from "./reducers/orderReducer";
const finalReducer=combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaReducer:updatePizzaReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    filterPizzasReducer:filterPizzasReducer
})
const cartItems=localStorage.getItem('cartItems') ?JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null;
const initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
};
const composeEnhancers = composeWithDevTools({});

const store=createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
export default store;