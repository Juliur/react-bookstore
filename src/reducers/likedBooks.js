import {ADD_LIKE, REMOVE_LIKE} from '../actions/actionTypes';

const likedBooks = (state=[], {type, payload}) => {
  switch(type){
    case ADD_LIKE:
      return[
        ...state,
        payload
      ]
    case REMOVE_LIKE:
      return state.filter(id => id !== payload)
    default:
       return state
  }
}

export default likedBooks