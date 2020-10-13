import moment from 'moment';

export const dateFormat = (date, format='L') => moment(date).format(format);
