import * as fns from '../lib';
import { datesMatch } from './utils';

describe('adjustDateDay', () => {
  it('should shift day of date by provided value', () => {
    const expected = new Date('2019-10-11');

    const result = fns.adjustDateDay('2019-10-10', 1);

    datesMatch(result, expected);
  });

  it('should shift month if day shift crosses month boundary', () => {
    const expected = new Date('2019-09-30');

    const result = fns.adjustDateDay('2019-10-10', -10);

    datesMatch(result, expected);
  });

  it('should shift year if day shift crosses year boundary', () => {
    const expected = new Date('2020-01-08');

    const result = fns.adjustDateDay('2019-12-25', 14);

    datesMatch(result, expected);
  });
});
