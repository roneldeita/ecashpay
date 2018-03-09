import * as types from './actionTypes'
export function loadProfileSuccess(profile){
  return {type: types.LOAD_PROFILE_SUCCESS, profile}
}

export function loadProfile(profile){
  return loadProfileSuccess(profile)
}
