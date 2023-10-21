/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

import UniversalCookies from "universal-cookie";

export default class Cookies {
  constructor(opts = {}) {
    this.cookies = new UniversalCookies(opts);
  }

  set(key, data, options = { path: "/" }) {
    this.cookies.set(key, JSON.stringify(data), options);
  }

  get(key) {
    const value = this.cookies.get(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error("Error parsing cookie data:", error);
      return null;
    }
  }

  remove(key, options = { path: "/" }) {
    this.cookies.remove(key, options);
  }
}
