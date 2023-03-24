import { setStorage } from './modules/setStorage.js';
import { getStorage } from './modules/getStorage.js';
import { createLogo } from './modules/createLogo.js';
import { createButtonsGroup } from './modules/createButtonsGroup.js';
import { createMain } from './modules/createMain.js';
import { createHeader } from './modules/createHeader.js';
import { createTable } from './modules/createTable.js';
import { createForm } from './modules/createForm.js';
import { addContactData } from './modules/addContactData.js';
import { printContact } from './modules/printContact.js';
import { sortTable } from './modules/sortTable.js';
import { uniqueNumber } from './modules/uniqueNumber.js';

export let newDataCopy = [];

export const init = (selector, title) => {
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
    printContact(table.tBody, sortTable(newDataCopy, 'name', dir));
    dir = !dir;
  };

  const sortSur = () => {
    table.tBody.innerHTML = '';
    printContact(table.tBody, sortTable(newDataCopy, 'surname', dir));
    dir = !dir;
  };

  document.body.append(form.overlay);
  header.haderContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper);
  main.mainContainer.append(table.table);
  printContact(table.tBody, newDataCopy);

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
    setStorage('key', newDataCopy);
    printContact(table.tBody, newDataCopy);
  });

  const removeStorage = e => {
    if (e.target.closest('.del-icon')) {
      if (confirm('Точно хотите удалить ?')) {
        const id = parseInt(e.target.closest('.contact').dataset.id);
        const datas = newDataCopy.filter(item => item.id !== id);

        e.target.closest('.contact').remove();

        newDataCopy = datas;
        table.tBody.textContent = '';

        const del = document.querySelectorAll('.delete');
        del.forEach(element => {
          element.classList.toggle('is-visible');
        });

        setStorage('key', newDataCopy);
        printContact(table.tBody, newDataCopy);
      }
    }
  };

  table.tBody.addEventListener('click', removeStorage);

  table.tBody.textContent = '';
  getStorage('key');
  printContact(table.tBody, newDataCopy);
};
window.phoneBookInit = init;
