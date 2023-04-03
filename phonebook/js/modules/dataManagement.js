import { dataCopyObj } from '../main.js';
import { createRow, createTable } from './createElements.js';
import { setStorage } from './dataLocalStorage.js';

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

export const removeStorage = e => {
  if (e.target.closest('.del-icon')) {
    if (confirm('Точно хотите удалить ?')) {
      const id = parseInt(e.target.closest('.contact').dataset.id);
      const datas = dataCopyObj.newDataCopy.filter(item => item.id !== id);

      e.target.closest('.contact').remove();

      dataCopyObj.newDataCopy = datas;
      table.tBody.textContent = '';

      const del = document.querySelectorAll('.delete');
      del.forEach(element => {
        element.classList.toggle('is-visible');
      });

      setStorage(key, dataCopyObj.newDataCopy);
      printContacts(table.tBody, dataCopyObj.newDataCopy);
    }
  }
};
