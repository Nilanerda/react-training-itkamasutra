import {combineReducers, createStore} from "redux";
import dialogPageReducer from "./dialog-page-reducer";
import profilePageReducer from "./profile-page-reducer";
import usersPageReducer from "./users-page-reducer";

let reducersCollection = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    usersPage: usersPageReducer
});

let store = createStore(reducersCollection);

export default store;