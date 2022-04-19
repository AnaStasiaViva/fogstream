import { format } from 'date-fns'

export const getFormatedDate = (date = new Date()) => {
  return format(date, 'yyyy-MM-dd')
};
