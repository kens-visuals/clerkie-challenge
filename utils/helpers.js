import { format } from 'date-fns';

export const monthFormater = (month) => format(month, 'MMMM');
export const yearFormater = (year) => format(year, 'yyyy');
