import { createRow } from './createRow.js';

export const printContact = (app, arr) => {
  const allRow = arr.map(createRow);
  app.append(...allRow);
  return allRow;
};
