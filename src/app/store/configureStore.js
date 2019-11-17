import { createStore, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"; //reactReduxFirebase is the store enhancer and adds the firebase configuration into our store. getFirebase will allow us to get an instance of firebase inside our actions - we will use this in our redux thunks
import { reduxFirestore, getFirestore } from "redux-firestore"; // gives us data binding
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "../config/firebase";

// when we create a new user inside firebase, the user will have a user profile
const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true, // this property will tell our react-redux firebase configuration that when we have a user profile for a user who's just registered, then we will store that in firestore and not in firebase, which is the default
  updateProfileOnLogin: false
};

// this will make our app wait until our authentication is ready
export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composedEnhancer);

  return store;
};
