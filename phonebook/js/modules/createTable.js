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

  thDel.textContent = 'Удалить';
  thName.textContent = 'Имя';
  thSurName.textContent = 'Фамилия';
  thPhone.textContent = 'Телефон';

  thDel.classList.add('delete');
  thName.classList.add('th-name');
  thSurName.classList.add('th-surname');
  table.classList.add('table', 'table-striped');

  tr.append(thDel, thName, thSurName, thPhone, thEdit);
  thead.append(tr);
  table.append(thead, tBody);

  return {
    table,
    tBody,
    thDel,
    thName,
    thSurName
  };
};
