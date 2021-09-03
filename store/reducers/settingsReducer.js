import * as types from '../types';

const initialState = {
  fullExperience: null,
  loading: true,
  error: null,
 
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
  
export { settingsReducer as default };
