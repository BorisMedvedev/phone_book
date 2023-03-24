import { newDataCopy } from '../main.js';

export const addContactData = contact => {
  newDataCopy.push(contact);

  return newDataCopy;
};
