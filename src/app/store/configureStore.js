import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
  /* a Redux reducer gets to decide how each action affects the state */
  const store = createStore(rootReducer, devToolsEnhancer()); // takes one required argument which is the reducer
  return store;
};
