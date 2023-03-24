export const getStorage = key => {
  const unique = localStorage.getItem(key);
  if (unique !== '' && unique !== null) {
    newDataCopy = JSON.parse(unique);
  }
  return newDataCopy;
};
