import userTypes from '../actionTypes/user';

export function getUser() {
  return { type: userTypes.USER_AUTH_FETCH };
}

export function getUserSuccess(payload) {
  return { type: userTypes.USER_AUTH_SUCCESS, payload };
}

export function getUserFail() {
  return { type: userTypes.USER_AUTH_FAIL };
}

export function changeUserWebsite(payload) {
  return { type: userTypes.USER_CHANGE_WEBSITE, payload };
}
