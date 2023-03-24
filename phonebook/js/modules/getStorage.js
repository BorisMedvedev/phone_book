import { newDataCopy } from '../main.js';

export let getStorage = key => {
  let unique = localStorage.getItem(key);
  if (unique !== '' && unique !== null) {
    newDataCopy = JSON.parse(unique);
  }
  return newDataCopy;
};
