export class LocalStorage {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  getItem(key: string) {
    return this.storage.getItem(key);
  }
  setItem(key: string, item: string) {
    return this.storage.setItem(key, item);
  }
  removeItem(key: string) {
    return this.storage.removeItem(key);
  }
  clear() {
    return this.storage.clear();
  }
}
