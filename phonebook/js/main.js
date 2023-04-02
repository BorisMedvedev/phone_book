import {
  createForm,
  createHeader,
  createLogo,
  createMain,
  createTable,
  createButtonsGroup
} from './modules/createElements.js';

import {
  uniqueNumber,
  sortTable,
  addContactData,
  printContacts
} from './modules/dataManagement.js';

import { setStorage, getStorage } from './modules/dataLocalStorage.js';

export let dataCopyObj = {
  newDataCopy: []
};

export const init = (selector, title, key) => {
  const app = document.querySelector('#book');
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'submit',
      text: 'Добавить'
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить'
    }
  ]);

  const table = createTable();
  const form = createForm();

  let dir = true;
  const sort = () => {
    table.tBody.innerHTML = '';
    printContacts(table.tBody, sortTable(dataCopyObj.newDataCopy, 'name', dir));
    dir = !dir;
  };

  const sortSur = () => {
    table.tBody.innerHTML = '';
    printContacts(
      table.tBody,
      sortTable(dataCopyObj.newDataCopy, 'surname', dir)
    );
    dir = !dir;
  };

  document.body.append(form.overlay);
  header.haderContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper);
  main.mainContainer.append(table.table);
  printContacts(table.tBody, dataCopyObj.newDataCopy);

  app.append(header, main);
  table.thName.addEventListener('click', sort);
  table.thSurName.addEventListener('click', sortSur);

  form.overlay.addEventListener('click', e => {
    if (e.target === form.overlay || e.target === form.close) {
      form.overlay.classList.remove('is-visible');
    }
  });

  buttonGroup.btns[0].addEventListener('click', () => {
    form.overlay.classList.add('is-visible');
  });

  buttonGroup.btns[1].addEventListener('click', () => {
    const del = document.querySelectorAll('.delete');
    del.forEach(element => {
      element.classList.toggle('is-visible');
    });
  });

  const removeStorage = e => {
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

  form.form.addEventListener('submit', e => {
    e.preventDefault();
    const id = uniqueNumber();
    const newContact = {
      id,
      name: form.inputName.value,
      surname: form.inputSurName.value,
      phone: form.inputPhone.value
    };

    if (form.inputName.value.trim() === '') {
      alert('Введите имя');
      return;
    }
    if (form.inputSurName.value.trim() === '') {
      alert('Введите фамилию');
      return;
    }
    if (form.inputPhone.value.trim() === '') {
      alert('Введите телефон');
      return;
    }
    addContactData(newContact);
    table.tBody.textContent = '';
    form.overlay.classList.remove('is-visible');
    form.form.reset();
    setStorage('key', dataCopyObj.newDataCopy);
    printContacts(table.tBody, dataCopyObj.newDataCopy);
  });

  table.tBody.addEventListener('click', removeStorage);

  table.tBody.textContent = '';
  getStorage(key);
  printContacts(table.tBody, dataCopyObj.newDataCopy);
};
window.phoneBookInit = init;
