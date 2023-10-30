import {editContactForm} from './editContactForm.js';
import {capitalizeWords, sortArrayOfObjects} from './utils.js';

export const createRow = (data, contacts) => {
  const tr = document.createElement('tr');
  const tdDel = document.createElement('td');
  const tdName = document.createElement('td');
  const tdSurename = document.createElement('td');
  const tdPhone = document.createElement('td');
  const tdEdit = document.createElement('td');
  const linkPhone = document.createElement('a');
  const buttonDel = document.createElement('button');
  const buttonEdit = document.createElement('button');


  tr.id = data.id;
  tr.setAttribute('data-id', data.id);

  tr.classList.add('contact');
  buttonEdit.classList.add('btn-edit');

  tdDel.classList.add('delete');
  buttonDel.classList.add('del-icon');

  tdName.textContent = capitalizeWords(data.name);
  tdSurename.textContent = capitalizeWords(data.surname);
  linkPhone.href = `tel:${data.phone}`;
  linkPhone.textContent = data.phone;
  buttonEdit.title = 'Изменить данные';

  tdDel.append(buttonDel);
  tdPhone.append(linkPhone);
  tdEdit.append(buttonEdit);
  tr.append(tdDel, tdName, tdSurename, tdPhone, tdEdit);

  const del = () => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === tr.id) {
        tr.remove();
        contacts.splice(i, 1);
      }
    }
    localStorage.setItem('user', JSON.stringify(contacts));
    if (contacts.length <= 0) {
      document.querySelector('.btn-danger').classList.add('remove');
      const deleteBtn = document.querySelectorAll('.delete');
      deleteBtn.forEach(element => {
        element.classList.remove('is-visible');
      });
    } else {
      document.querySelector('.btn-danger').classList.remove('remove');
    }
  };

  buttonDel.addEventListener('click', del);

  let isDescending = false;

  document.querySelector('.th-name').addEventListener('click', () => {
    isDescending = !isDescending;
    const sortedStudentsByName = sortArrayOfObjects(
        contacts, 'name', isDescending ? 'desc' : 'asc');
    document.querySelector('tbody').innerHTML = '';
    sortedStudentsByName.forEach((item) => {
      document.querySelector('tbody').append(createRow(item, contacts));
    });
  });
  document.querySelector('.th-surname').addEventListener('click', () => {
    isDescending = !isDescending;
    const sortedStudentsByName = sortArrayOfObjects(
        contacts, 'surname', isDescending ? 'desc' : 'asc');
    document.querySelector('tbody').innerHTML = '';
    sortedStudentsByName.forEach((item) => {
      document.querySelector('tbody').append(createRow(item, contacts));
    });
  });


  buttonEdit.addEventListener('click', () => {
    const editForm = editContactForm();
    document.querySelector('tbody').append(editForm.overlay);

    editForm.inputName.value = tdName.textContent;
    editForm.inputSurName.value = tdSurename.textContent;
    editForm.inputPhone.value = tdPhone.textContent;
  });

  return tr;
};
