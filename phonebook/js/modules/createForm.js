import {createRow} from './createItem.js';
import {generateId} from './utils.js';

const contacts = JSON.parse(localStorage.getItem('user')) || [];
export const createForm = () => {
  const overlay = document.createElement('div');
  const form = document.createElement('form');
  const close = document.createElement('button');
  const title = document.createElement('h2');
  const formGroupName = document.createElement('div');
  const labelName = document.createElement('label');
  const inputName = document.createElement('input');
  const formGroupSurName = document.createElement('div');
  const formGroupPhone = document.createElement('div');
  const labelSurName = document.createElement('label');
  const inputSurName = document.createElement('input');
  const labelPhone = document.createElement('label');
  const inputPhone = document.createElement('input');
  const btnsWrapper = document.createElement('div');
  const addBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  addBtn.type = 'submit';
  deleteBtn.type = 'button';

  addBtn.textContent = 'Сохранить';
  deleteBtn.textContent = 'Отмена';

  btnsWrapper.classList.add('btn-weapper');
  addBtn.classList.add('btn', 'btn-primary');
  deleteBtn.classList.add('btn', 'btn-danger');
  formGroupName.classList.add('form-group');
  labelName.classList.add('form-label');
  inputName.classList.add('form-input');
  formGroupSurName.classList.add('form-group');
  labelSurName.classList.add('form-label');
  inputSurName.classList.add('form-input');
  formGroupPhone.classList.add('form-group');
  labelPhone.classList.add('form-label');
  inputPhone.classList.add('form-input');
  title.classList.add('form-title');
  form.classList.add('form');
  close.classList.add('close', 'btn-reset');
  overlay.classList.add('form-overlay');

  labelName.htmlFor = 'name';
  inputName.name = 'name';
  inputName.id = 'name';
  labelSurName.htmlFor = 'name';
  inputSurName.name = 'name';
  inputSurName.id = 'name';
  labelPhone.htmlFor = 'name';
  inputPhone.name = 'name';
  inputPhone.id = 'name';
  title.textContent = 'Добавить контакт';
  labelName.textContent = 'Имя';
  labelSurName.textContent = 'Фамилия';
  labelPhone.textContent = 'Телефон';
  close.type = 'button';
  inputPhone.type = 'tel';

  const input = inputPhone;
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(input);

  labelName.append(inputName);
  labelSurName.append(inputSurName);
  labelPhone.append(inputPhone);
  formGroupName.append(labelName);
  formGroupSurName.append(labelSurName);
  formGroupPhone.append(labelPhone);
  btnsWrapper.append(addBtn, deleteBtn);
  form.append(
      close,
      title,
      formGroupName,
      formGroupSurName,
      formGroupPhone,
      btnsWrapper,
  );
  overlay.append(form);

  document.addEventListener('click', (e) => {
    if (e.target === close || e.target === deleteBtn || e.target === overlay) {
      overlay.remove();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTr = {};
    newTr.id = generateId();
    newTr.name = inputName.value.trim();
    newTr.surname = inputSurName.value.trim();
    newTr.phone = inputPhone.value.trim();

    contacts.push(newTr);
    document.querySelector('tbody').append(createRow(newTr));
    localStorage.setItem('user', JSON.stringify(contacts));
    overlay.remove();
  });

  return {
    form,
    overlay,
    inputName,
    inputSurName,
    inputPhone,
    close,

  };
};
