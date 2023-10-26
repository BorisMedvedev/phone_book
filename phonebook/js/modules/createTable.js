import {createForm} from './createForm.js';

export const createTable = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tBody = document.createElement('tbody');
  const tr = document.createElement('tr');
  const thDel = document.createElement('th');
  const thName = document.createElement('th');
  const thSurName = document.createElement('th');
  const thPhone = document.createElement('th');
  const thEdit = document.createElement('th');
  const container = document.createElement('div');
  const btnsWrapper = document.createElement('div');
  const addBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  addBtn.textContent = 'Добавить';
  deleteBtn.textContent = 'Удалить';
  thDel.textContent = 'Удалить';
  thName.textContent = 'Имя';
  thSurName.textContent = 'Фамилия';
  thPhone.textContent = 'Телефон';

  btnsWrapper.classList.add('btn-weapper');
  addBtn.classList.add('btn', 'btn-primary');
  deleteBtn.classList.add('btn', 'btn-danger');
  container.classList.add('container');
  thDel.classList.add('delete');
  thName.classList.add('th-name');
  thSurName.classList.add('th-surname');
  table.classList.add('table', 'table-striped');

  btnsWrapper.append(addBtn, deleteBtn);
  tr.append(thDel, thName, thSurName, thPhone, thEdit);
  thead.append(tr);
  table.append(thead, tBody);
  container.append(btnsWrapper, table);

  addBtn.addEventListener('click', () => {
    const modalForm = createForm();

    document.body.append(modalForm.overlay);
  });

  deleteBtn.addEventListener('click', () => {
    const delBtns = document.querySelectorAll('.delete');
    delBtns.forEach(element => {
      element.classList.toggle('is-visible');
    });
  });


  return {
    container,
    table,
    tBody,
    thDel,
    thName,
    thSurName,
  };
};
