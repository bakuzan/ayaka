import * as fns from '../lib';

describe('checkIfDatePartsMatch', () => {
  it('should return all true if dates are equal', () => {
    const date = '2019-01-01';
    const result = fns.checkIfDatePartsMatch(date, date);

    Object.keys(result).forEach((k) => expect(result[k]).toBeTruthy());
  });

  it('should return false for date if not matched', () => {
    const date1 = '2019-01-01';
    const date2 = '2019-01-02';
    const result = fns.checkIfDatePartsMatch(date1, date2);

    expect(result.date).toBeFalsy();
    expect(result.month).toBeTruthy();
    expect(result.year).toBeTruthy();
  });

  it('should return false for month if not matched', () => {
    const date1 = '2019-01-01';
    const date2 = '2019-02-01';
    const result = fns.checkIfDatePartsMatch(date1, date2);

    expect(result.date).toBeTruthy();
    expect(result.month).toBeFalsy();
    expect(result.year).toBeTruthy();
  });

  it('should return false for year if not matched', () => {
    const date1 = '2019-01-01';
    const date2 = '2020-01-01';
    const result = fns.checkIfDatePartsMatch(date1, date2);

    expect(result.date).toBeTruthy();
    expect(result.month).toBeTruthy();
    expect(result.year).toBeFalsy();
  });
});
