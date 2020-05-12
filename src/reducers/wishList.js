import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST} from '../actions/actionTypes';

const wishList = (state=[], {type, payload}) => {
  switch(type){
    case ADD_TO_WISH_LIST:
      if(state.includes(payload)) return state;
      return[
        ...state,
        payload
      ]
    case REMOVE_FROM_WISH_LIST:
      return state.filter(id => id !== payload)
    default:
      return state
  }
}

export default wishList

export const getWishList = state => state;