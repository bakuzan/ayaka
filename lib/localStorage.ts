/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { prop } from './helpers/prop';

export default class Store<T> {
  private storeName: string;
  private defaultValue: T;

  constructor(storeName: string, defaultValue: T) {
    this.storeName = storeName;
    this.defaultValue = defaultValue;
  }

  private get storage(): Partial<Storage> {
    return typeof localStorage !== 'undefined'
      ? localStorage
      : {
          getItem: (key: string) => '',
          setItem: (key: string, value: string) => {}
        };
  }

  public get(): T {
    const item = this.storage.getItem(this.storeName) || '';
    const data = (item ? JSON.parse(item) : this.defaultValue) as T;

    return { ...this.defaultValue, ...data };
  }

  public getKey<K extends keyof T>(key: K): T[K] {
    const item = this.storage.getItem(this.storeName) || '';
    const data = (item ? JSON.parse(item) : this.defaultValue) as T;

    return prop(data, key) ?? prop(this.defaultValue, key);
  }

  public set(mergeValues: Partial<T>): T {
    const values = this.get();
    const updated: T = { ...values, ...mergeValues };
    this.storage.setItem(this.storeName, JSON.stringify(updated));
    return updated;
  }

  public replace(newValue: T): T {
    const data = JSON.stringify(newValue);
    this.storage.setItem(this.storeName, data);
    return this.get();
  }

  public upgrade(...upgradeFns: ((data: Partial<T>) => Partial<T>)[]) {
    const data = this.get();
    const upgradedData = upgradeFns.reduce((upD, fn) => fn(upD), data);
    this.replace(upgradedData as T);
  }
}
