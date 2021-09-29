import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducers/Reducer";
const store=createStore(Reducer,applyMiddleware(thunk))

export{
    store
}