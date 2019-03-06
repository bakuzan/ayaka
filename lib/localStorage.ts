export default class Storage {
  private storeName = '';
  private defaultValue: any = null;

  constructor(storeName: string, defaultValue: object) {
    this.storeName = storeName;
    this.defaultValue = defaultValue;
  }

  get(key?: string): object {
    const data =
      JSON.parse(localStorage.getItem(this.storeName)) || this.defaultValue;

    return key ? data[key] : data;
  }

  set(mergeValues: object): object {
    const values = this.get();
    const updated = { ...values, ...mergeValues };
    localStorage.setItem(this.storeName, JSON.stringify(updated));
    return updated;
  }

  replace(newValue: object): object {
    const data = JSON.stringify(newValue);
    localStorage.setItem(this.storeName, data);
    return this.get();
  }

  upgrade(upgradeFn: (data: object) => object) {
    const data = this.get();
    const upgradedData = upgradeFn(data);
    this.replace(upgradedData);
  }
}
