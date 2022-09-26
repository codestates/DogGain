import {
  REMOVE_FROM_DEAL,
  SET_COMMENTS,
  REMOVE_FROM_FORUM,
} from '../actions/index';
import { initialState } from './initialState';

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload],
      });
    case REMOVE_FROM_DEAL:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (el) => el.itemId !== action.payload.itemId
        ),
      });
    case REMOVE_FROM_FORUM:
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(
          (el) => el.itemId !== action.payload.itemId
        ),
      });
    default:
      return state;
  }
};

export default commentReducer;
