import { tellMyTime } from './date/moment';
import moment from 'moment';

describe('Test moment', () => {
  test('tellMyTime', async () => {
    expect(tellMyTime()).toEqual(moment().format('MMMM Do YYYY, h:mm:ss a'));
  });
});
