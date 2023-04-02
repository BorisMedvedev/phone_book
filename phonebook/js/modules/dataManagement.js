import { dataCopyObj } from '../main.js';
import { createRow } from './createElements.js';

export const sortTable = (arr, prop, dir) => {
  const arrCopy = [...arr];
  return arrCopy.sort((stA, stB) => {
    if (!dir === false ? stA[prop] < stB[prop] : stA[prop] > stB[prop]) {
      return -1;
    }
  });
};

export const addContactData = contact => {
  dataCopyObj.newDataCopy.push(contact);

  return dataCopyObj;
};

export const printContacts = (app, arr) => {
  const allRow = arr.map(createRow);
  app.append(...allRow);
  return allRow;
};

export const uniqueNumber = () => {
  let date = Date.now();
  if (date <= uniqueNumber.previous) {
    date = ++uniqueNumber.previous;
  } else {
    uniqueNumber.previous = date;
  }
  return date;
};
