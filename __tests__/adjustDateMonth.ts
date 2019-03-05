import * as fns from '../lib';
import { datesMatch } from './utils';

describe('adjustDateMonth', () => {
  it('should shift month of date by provided value', () => {
    const expected = new Date('2019-06-05');

    const result = fns.adjustDateMonth('2019-03-05', 3);

    datesMatch(result, expected);
  });

  it('should shift year if month shift crosses year boundary', () => {
    const expected = new Date('2018-12-05');

    const result = fns.adjustDateMonth('2019-03-05', -3);

    datesMatch(result, expected);
  });
});
