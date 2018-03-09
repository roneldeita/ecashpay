import * as types from '../actions/actionTypes'

export default function(state = [], payload) {
  switch(payload.type){
    case types.LOAD_PROFILE_SUCCESS:
      return payload.profile
    default:
      return state;
  }
}
