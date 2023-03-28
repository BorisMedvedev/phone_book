import { dataCopyObj } from '../main.js';

export let getStorage = key => {
  let unique = localStorage.getItem(key);
  if (unique !== '' && unique !== null) {
    dataCopyObj.newDataCopy = JSON.parse(unique);
  }
  return dataCopyObj;
};
