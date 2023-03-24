import { createButtonsGroup } from './createButtonsGroup.js';

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
  const btnsGroup = createButtonsGroup([
    {
      className: 'btn btn-primary mr-3 mt-3',
      text: 'Сохранить'
    },
    {
      className: 'btn btn-danger mt-3',
      type: 'reset',
      text: 'Отмена'
    }
  ]);

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
  inputPhone.type = 'number';

  labelName.append(inputName);
  labelSurName.append(inputSurName);
  labelPhone.append(inputPhone);
  formGroupName.append(labelName);
  formGroupSurName.append(labelSurName);
  formGroupPhone.append(labelPhone);
  form.append(
    close,
    title,
    formGroupName,
    formGroupSurName,
    formGroupPhone,
    btnsGroup.btnWrapper
  );
  overlay.append(form);

  return {
    form,
    overlay,
    inputName,
    inputSurName,
    inputPhone,
    close,
    btnsGroup
  };
};
