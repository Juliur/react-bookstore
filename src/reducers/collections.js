import {FETCH_COLLECTIONS_SUCCESS} from '../actions/actionTypes.js';

export default (state = [], {type, payload}) =>{
	switch(type){
		case FETCH_COLLECTIONS_SUCCESS: 
			return [
				...state,
				...payload
			] 
		default: 
			return state
	}
}
