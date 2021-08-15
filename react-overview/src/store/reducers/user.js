import userTypes from '../actionTypes/user';

const initialSate = {
  isLoading: false,
  isAuthorized: false,
};

function userReducer(state = initialSate, action) {
  switch (action.type) {
    case userTypes.USER_AUTH_FETCH:
      return {
        ...state,
        isLoading: true,
      };

    case userTypes.USER_AUTH_SUCCESS:
      return {
        isLoading: false,
        isAuthorized: true,
        ...action.payload,
      };

    case userTypes.USER_AUTH_FAIL:
      return {
        isLoading: false,
        isAuthorized: false,
      };

    case userTypes.USER_CHANGE_WEBSITE:
      return {
        ...state,
        website: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
