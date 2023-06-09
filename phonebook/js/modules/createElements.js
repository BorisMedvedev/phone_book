export const createContainer = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  return container;
};

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

export const createHeader = () => {
  const header = document.createElement('header');
  const haderContainer = createContainer();

  header.classList.add('header');
  header.append(haderContainer);
  header.haderContainer = haderContainer;

  return header;
};

export const createLogo = title => {
  const h2 = document.createElement('h2');

  h2.classList.add('logo');
  h2.textContent = `Справочник. пользователь - ${title}`;

  return h2;
};

export const createMain = () => {
  const main = document.createElement('main');
  const mainContainer = createContainer();

  main.append(mainContainer);
  main.mainContainer = mainContainer;

  return main;
};

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

export const createButtonsGroup = params => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  const btns = params.map(({ className, type, text }) => {
    const button = document.createElement('button');

    button.type = type;
    button.className = className;
    button.textContent = text;

    return button;
  });

  btnWrapper.append(...btns);

  return {
    btnWrapper,
    btns
  };
};

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
