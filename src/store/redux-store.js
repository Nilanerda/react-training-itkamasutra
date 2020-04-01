import {combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialog-page-reducer";
import profilePageReducer from "./profile-page-reducer";

let reducersCollection = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer
});

let store = createStore(reducersCollection);

export default store;