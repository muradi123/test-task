import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { AllReducers } from "./Reducers/RootReducer";

const store = createStore(AllReducers, applyMiddleware(thunk));
export default store;
