import { applyMiddleware, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import * as actionCreators from "../actions";
import thunk from "redux-thunk";
import rootReducer from "@reducers/index.js";

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  actionCreators,
  trace: true,
  traceLimit: 25,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
