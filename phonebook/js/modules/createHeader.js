import {createLogo} from './createTitleMain.js';

export const createHeader = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');
  const logo = createLogo('Борис');

  container.classList.add('container');
  header.classList.add('header');

  container.append(logo);
  header.append(container);

  return header;
};
