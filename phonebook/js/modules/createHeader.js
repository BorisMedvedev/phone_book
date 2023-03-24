import { createContainer } from './createContainer.js';

export const createHeader = () => {
  const header = document.createElement('header');
  const haderContainer = createContainer();

  header.classList.add('header');
  header.append(haderContainer);
  header.haderContainer = haderContainer;

  return header;
};
