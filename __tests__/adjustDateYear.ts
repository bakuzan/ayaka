import * as fns from '../lib';
import { datesMatch } from './utils';

describe('adjustDateYear', () => {
  it('should shift year of date by provided value (+ve)', () => {
    const expected = new Date('2020-03-05');

    const result = fns.adjustDateYear('2019-03-05', 1);

    datesMatch(result, expected);
  });

  it('should shift year of date by provided value (-ve)', () => {
    const expected = new Date('2017-03-05');

    const result = fns.adjustDateYear('2019-03-05', -2);

    datesMatch(result, expected);
  });
});
