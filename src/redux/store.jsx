import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// IMPORTING REDUCERS
import Reducer from "./reducer";

// const middleware = applyMiddleware(thunk, logger);
const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
	Reducer,
});

const store = createStore(rootReducer, middleware);
export default store;
