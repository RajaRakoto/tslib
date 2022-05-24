import moment from 'moment';

export function tellMyTime() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}
