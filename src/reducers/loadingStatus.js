import { SET_ERROR, SET_LOADING_STATUS } from '../actions/types';
const initState = {
  showError: false,
  loading: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
    };
    case SET_ERROR:
      return {
        ...state,
        showError: action.showError,
        loading: false,
      };
    default:
      return state;
  }
};
