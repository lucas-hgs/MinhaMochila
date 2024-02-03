import {format} from 'date-fns';

function formatDate(date: any) {
  return {
    formatedDate: format(date, 'dd/MM/yyyy'),
    formatedTime: format(date, 'HH:mm'),
  };
}
export const dateUtils = {formatDate};
