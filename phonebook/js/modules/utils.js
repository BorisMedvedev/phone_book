export const sortTable = (arr, prop, dir) => {
  const arrCopy = [...arr];
  return arrCopy.sort((stA, stB) => {
    if (!dir === false ? stA[prop] < stB[prop] : stA[prop] > stB[prop]) {
      return -1;
    }
  });
};

export const generateId = () => {
  let id = '';
  for (let i = 0; i < 14; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};
