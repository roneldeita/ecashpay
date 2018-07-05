import * as types from './actionTypes'
import { Auth } from '../services/api'
import { getToken } from '../assets/utils/auth'
import { message } from 'antd'

export function loadProfileSuccess(profile){
  return {type: types.LOAD_PROFILE_SUCCESS, profile}
}

export function loadProfile(){
  if(getToken()){
    return dispatch => {
      Auth(null, {'x-access-token':getToken()}).getUserProfile()
      .then(res => {
        dispatch(loadProfileSuccess(res.data))
        sessionStorage.setItem("profile", JSON.stringify(res.data));
      }).catch(err=>{
        if(err){
          message.error('Server Error', 0)
        }
      })
    }
  }else{
    return loadProfileSuccess({})
  }
}
