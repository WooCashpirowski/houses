import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  housesListReducer,
  houseDetailsReducer,
  houseDeleteReducer,
  houseCreateReducer,
} from "./redux/reducers";

const reducer = combineReducers({
  housesList: housesListReducer,
  houseDetails: houseDetailsReducer,
  houseDelete: houseDeleteReducer,
  houseCreate: houseCreateReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
