import { dataCopyObj } from '../main.js';

export const setStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

export let getStorage = key => {
  let unique = localStorage.getItem(key);
  if (unique !== '' && unique !== null) {
    dataCopyObj.newDataCopy = JSON.parse(unique);
  }
  return dataCopyObj;
};
