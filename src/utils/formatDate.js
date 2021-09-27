import moment from 'moment';
import 'moment/locale/pl';

const formatDate = (date) => {
  return moment(date).format('L');
};

export const countDays = (grantedDate, days) => {
  return moment(grantedDate).add(days, 'days').calendar();
};

export default formatDate;
