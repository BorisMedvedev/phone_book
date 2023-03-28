import { dataCopyObj } from '../main.js';

export const addContactData = contact => {
  dataCopyObj.newDataCopy.push(contact);

  return dataCopyObj;
};
