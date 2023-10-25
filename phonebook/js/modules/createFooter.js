export const createFooter = () => {
  const footer = document.createElement('footer');
  const container = document.createElement('div');
  const copy = document.createElement('p');

  container.classList.add('container');
  footer.classList.add('footer');
  copy.classList.add('logo');

  copy.textContent = 'Все права защищены';

  container.append(copy);
  footer.append(container);

  return footer;
};
