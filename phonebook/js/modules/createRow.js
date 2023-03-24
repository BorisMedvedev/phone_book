export const createRow = ({ id, name, surname, phone }) => {
  const tr = document.createElement('tr');
  const tdDel = document.createElement('td');
  const tdName = document.createElement('td');
  const tdSurename = document.createElement('td');
  const tdPhone = document.createElement('td');
  const tdEdit = document.createElement('td');
  const linkPhone = document.createElement('a');
  const buttonDel = document.createElement('button');
  const buttonEdit = document.createElement('button');

  tr.id = id;
  tr.setAttribute('data-id', id);

  tr.classList.add('contact');
  buttonEdit.classList.add('btn-edit');

  tdDel.classList.add('delete');
  buttonDel.classList.add('del-icon');

  tdName.textContent = name;
  tdSurename.textContent = surname;
  linkPhone.href = `tel:${phone}`;
  linkPhone.textContent = phone;
  buttonEdit.title = 'Редактировать';
  tr.linkPhone = linkPhone;

  tdDel.append(buttonDel);
  tdPhone.append(linkPhone);
  tdEdit.append(buttonEdit);
  tr.append(tdDel, tdName, tdSurename, tdPhone, tdEdit);

  return tr;
};
