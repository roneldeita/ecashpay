import * as types from './actionTypes'
import { Auth } from '../services/api'

export function loadProfileSuccess(profile){
  return {type: types.LOAD_PROFILE_SUCCESS, profile}
}

export function loadProfile(AuthToken){
  const GetProfile = sessionStorage.getItem("profile")
  const ParseProfile = GetProfile ? JSON.parse(GetProfile) : ''

  if(AuthToken){
    return dispatch => {
      if(!ParseProfile){
        Auth(null, {token:AuthToken}).getUserProfile()
        .then(res => {
          sessionStorage.setItem("profile", JSON.stringify(res.data));
          dispatch(loadProfileSuccess(res.data))
        })
      }
      dispatch(loadProfileSuccess(ParseProfile))
    }
  }

}
