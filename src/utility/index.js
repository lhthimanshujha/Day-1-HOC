export default class Utils {
  static localStorageGetItem = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  };

  static localStorageSetItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  static localStorageRemoveItem = (key) => {
    localStorage.removeItem(key);
  };
}
