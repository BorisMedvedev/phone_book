import {createFooter} from './modules/createFooter.js';
import {createHeader} from './modules/createHeader.js';
import {createRow} from './modules/createItem.js';
import {createMain} from './modules/createMain.js';
import {createTable} from './modules/createTable.js';

const init = () => {
  const contacts = JSON.parse(localStorage.getItem('user')) || [];
  const app = document.body;
  const header = createHeader();
  const main = createMain();
  const table = createTable(contacts);
  const footer = createFooter();

  main.sectionTable.append(table.container);
  app.append(header, main.main, footer);

  contacts.forEach(item => {
    table.tBody.append(createRow(item, contacts));
  });

  if (contacts.length <= 0) {
    document.querySelector('.btn-danger').classList.add('remove');
  }
};

init();
