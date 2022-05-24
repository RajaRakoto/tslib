import { tellMyTime } from './libs/moment';
import moment from 'moment';

describe('Test moment', () => {
  test('tellMyTime', async () => {
    expect(tellMyTime()).toEqual(moment().format('MMMM Do YYYY, h:mm:ss a'));
  });
});
