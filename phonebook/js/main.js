import { data } from '../../data.js';

let newData = JSON.parse(JSON.stringify(data));

let newDataCopy = [];

{
  const addContactData = contact => {
    newData.push(contact);

    return newData;
  };

  const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');

    return container;
  };

  const createHeader = () => {
    const header = document.createElement('header');
    const haderContainer = createContainer();

    header.classList.add('header');
    header.append(haderContainer);
    header.haderContainer = haderContainer;

    return header;
  };

  const createLogo = title => {
    const h2 = document.createElement('h2');

    h2.classList.add('logo');
    h2.textContent = `Справочник. пользователь - ${title}`;

    return h2;
  };

  const createMain = () => {
    const main = document.createElement('main');
    const mainContainer = createContainer();

    main.append(mainContainer);
    main.mainContainer = mainContainer;

    return main;
  };

  const createButtonsGroup = params => {
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

  const createTable = () => {
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

  const createRow = ({ name: firstName, surname, phone, id }) => {
    const tr = document.createElement('tr');
    const tdDel = document.createElement('td');
    const tdName = document.createElement('td');
    const tdSurename = document.createElement('td');
    const tdPhone = document.createElement('td');
    const tdEdit = document.createElement('td');
    const linkPhone = document.createElement('a');
    const buttonDel = document.createElement('button');
    const buttonEdit = document.createElement('button');

    tr.setAttribute('data-id', parseInt(phone));
    tr.id = parseInt(phone);
    for (let i = 0; i < newData.length; i++) {
      newData[i].id = parseInt(newData[i].phone);
    }

    tr.classList.add('contact');
    buttonEdit.classList.add('btn-edit');

    tdDel.classList.add('delete');
    buttonDel.classList.add('del-icon');

    tdName.textContent = firstName;
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
  console.log(newData);
  const printContact = (app, arr) => {
    const allRow = arr.map(createRow);
    app.append(...allRow);

    return allRow;
  };

  const sortTable = (arr, prop, dir) => {
    const arrCopy = [...arr];
    return arrCopy.sort((stA, stB) => {
      if (!dir == false ? stA[prop] < stB[prop] : stA[prop] > stB[prop])
        return -1;
    });
  };

  const createForm = () => {
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

  const init = (selector, title) => {
    const app = document.querySelector('#book');
    const header = createHeader();
    const logo = createLogo(title);
    const main = createMain();
    const buttonGroup = createButtonsGroup([
      {
        className: 'btn btn-primary mr-3',
        type: 'button',
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
      printContact(table.tBody, sortTable(newData, 'name', dir));
      dir = !dir;
    };

    const sortSur = () => {
      table.tBody.innerHTML = '';
      printContact(table.tBody, sortTable(newData, 'surname', dir));
      dir = !dir;
    };

    document.body.append(form.overlay);
    header.haderContainer.append(logo);
    main.mainContainer.append(buttonGroup.btnWrapper);
    main.mainContainer.append(table.table);
    printContact(table.tBody, newData);

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

      const newContact = {
        name: form.inputName.value,
        surname: form.inputSurName.value,
        phone: form.inputPhone.value
      };

      addContactData(newContact);
      table.tBody.textContent = '';
      form.overlay.classList.remove('is-visible');
      form.form.reset();
      table.tBody.textContent = '';
      printContact(table.tBody, newData);
      console.log('newData: ', newData);
    });

    table.tBody.addEventListener('click', e => {
      console.log(e.target);
      if (e.target.closest('.del-icon')) {
        if (confirm('Точно хотите удалить ?')) {
          const id = parseInt(e.target.closest('.contact').dataset.id);
          const datas = newData.filter(item => {
            return item.id !== id;
          });
          console.log('id: ', id);
          e.target.closest('.contact').remove();

          newData = datas;
          table.tBody.textContent = '';
          printContact(table.tBody, newData);
          console.log('newDataCopy: ', newData);
        }
      }
    });
  };

  window.phoneBookInit = init;
}
