import moment from 'moment';
import 'moment/locale/pl';

const formatDate = (date) => {
  return moment(date).format('L');
};

export const countDays = (grantedDate, days) => {
  return moment(grantedDate).add(days, 'days').calendar();
};

export const daysToPay = (grantedDate, days) => {
  const a = moment();
  const b = moment(grantedDate).add(days + 1, 'days');
  const different = b.diff(a, 'days');
  return different;
};

export default formatDate;
