import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

function configureStore() {
  return createStore(reducer, {}, applyMiddleware(thunk));
}

const store = configureStore();
export default store;
