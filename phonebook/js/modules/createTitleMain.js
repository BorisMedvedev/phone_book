export const createLogo = (title = '') => {
  const h2 = document.createElement('h2');

  h2.classList.add('logo');
  h2.textContent = `Телефонный справочник. ${title}`;

  return h2;
};
