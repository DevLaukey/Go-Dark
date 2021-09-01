import * as types from '../types';

const setSettings = (settings) => {
  return {
    type: types.SET_SETTINGS,
    payload: settings,
  };
};

export { setSettings };
