export default class Store<T> {
  private storeName: string;
  private defaultValue: T;

  constructor(storeName: string, defaultValue: T) {
    this.storeName = storeName;
    this.defaultValue = defaultValue;
  }

  public get(): T {
    const item = localStorage.getItem(this.storeName) || '';
    const data = (item ? JSON.parse(item) : this.defaultValue) as T;

    return { ...this.defaultValue, ...data };
  }

  public getKey(key: keyof T): T[keyof T] {
    const item = localStorage.getItem(this.storeName) || '';
    const data = (item ? JSON.parse(item) : this.defaultValue) as T;

    return data[key] || this.defaultValue[key];
  }

  public set(mergeValues: Partial<T>): T {
    const values = this.get();
    const updated: T = { ...values, ...mergeValues };
    localStorage.setItem(this.storeName, JSON.stringify(updated));
    return updated;
  }

  public replace(newValue: T): T {
    const data = JSON.stringify(newValue);
    localStorage.setItem(this.storeName, data);
    return this.get() as T;
  }

  public upgrade(...upgradeFns: Array<(data: Partial<T>) => Partial<T>>) {
    const data = this.get();
    const upgradedData = upgradeFns.reduce((upD, fn) => fn(upD), data);
    this.replace(upgradedData as T);
  }
}
