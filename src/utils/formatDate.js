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

export const addDays = (days) => {
  return moment().add(days, 'days').format('DD-MM-YYYY');
};

export const daysToPercent = (created, days) => {
  const current = moment().unix();
  const createdDate = moment(created).unix();
  const endDate = moment(created).add(days, 'days').unix();

  return Math.round(((current - createdDate) / (endDate - createdDate)) * 100);
};

export default formatDate;
