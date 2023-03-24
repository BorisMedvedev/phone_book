export const setStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};
