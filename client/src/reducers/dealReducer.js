import { SET_DEALS } from "../actions/index";
import { initialState } from "./initialState";

const dealReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DEALS:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })
    default:
      return state;
  }
}

export default dealReducer;