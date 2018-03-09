import * as types from '../actions/actionTypes'

export default function(state = [], payload) {
  switch(payload.type){
    case types.SAVE_AUTH_SUCCESS:
      return payload.auth
    case types.CHECK_AUTH_SUCCESS:
      return payload.auth
    default:
      return state;
  }
}
