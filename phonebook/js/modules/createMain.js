export const createMain = () => {
  const main = document.createElement('main');
  const sectionTable = document.createElement('section');
  main.append(sectionTable);

  return {
    main,
    sectionTable,
  };
};
