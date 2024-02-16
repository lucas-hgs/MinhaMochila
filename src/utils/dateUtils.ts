import {format} from 'date-fns';

function formatDate(date: any) {
  return {
    formatedDate: format(date, 'dd/MM/yyyy'),
    formatedTime: format(date, 'HH:mm'),
  };
}

function formatDateToISO(date: any) {
  let day = date.split('/')[0];
  let month = date.split('/')[1];
  let year = date.split('/')[2];

  return year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);
}
export const dateUtils = {formatDate, formatDateToISO};
