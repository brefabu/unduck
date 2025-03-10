import {Storage} from 'redux-persist';

const storage = window.localStorage;

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.setItem(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getItem(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.removeItem(key);
    return Promise.resolve();
  },
};
