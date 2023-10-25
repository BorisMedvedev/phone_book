export const createRow = (data) => {
  const tr = document.createElement('tr');
  const tdDel = document.createElement('td');
  const tdName = document.createElement('td');
  const tdSurename = document.createElement('td');
  const tdPhone = document.createElement('td');
  const tdEdit = document.createElement('td');
  const linkPhone = document.createElement('a');
  const buttonDel = document.createElement('button');
  const buttonEdit = document.createElement('button');
  const contacts = JSON.parse(localStorage.getItem('user')) || [];

  tr.id = data.id;
  tr.setAttribute('data-id', data.id);

  tr.classList.add('contact');
  buttonEdit.classList.add('btn-edit');

  tdDel.classList.add('delete');
  buttonDel.classList.add('del-icon');

  tdName.textContent = data.name;
  tdSurename.textContent = data.surname;
  linkPhone.href = `tel:${data.phone}`;
  linkPhone.textContent = data.phone;
  buttonEdit.title = 'Редактировать';

  tdDel.append(buttonDel);
  tdPhone.append(linkPhone);
  tdEdit.append(buttonEdit);
  tr.append(tdDel, tdName, tdSurename, tdPhone, tdEdit);

  buttonDel.addEventListener('click', () => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === tr.id) {
        tr.remove();
        contacts.splice(i, 1);
        const delBtns = document.querySelectorAll('.delete');
        delBtns.forEach(element => {
          element.classList.remove('is-visible');
        });
        localStorage.setItem('user', JSON.stringify(contacts));
      }
    }
  });

  return tr;
};
