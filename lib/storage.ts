export default class Store {
  private storeName = '';
  private defaultValue: any = null;

  constructor(storeName: string, defaultValue: any) {
    this.storeName = storeName;
    this.defaultValue = defaultValue;
  }

  get(key?: string) {
    const data =
      JSON.parse(localStorage.getItem(this.storeName)) || this.defaultValue;

    return key ? data[key] : data;
  }

  set(newValues: any) {
    const values = this.get();
    const updated = { ...values, ...newValues };
    localStorage.setItem(this.storeName, JSON.stringify(updated));
    return updated;
  }
}
