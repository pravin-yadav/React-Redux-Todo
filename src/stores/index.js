import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducers  from "../reducers";


const store = createStore(rootreducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;