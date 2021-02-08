import moment from "moment";

export const DATE_FORMAT = "DD.MM.YYYY";

export const formatDate = (dateToFormat) => {
  return moment(dateToFormat).format(DATE_FORMAT);
};

export const isSameDay = (first, second) => {
  const firstDateFormatted = moment(first, DATE_FORMAT);
  const secondDateFormatted = moment(second, DATE_FORMAT);

  const isSameDay = firstDateFormatted.isSame(secondDateFormatted, "day");

  return isSameDay;
};

export const getMonth = (date = moment()) => {
  return moment(date, DATE_FORMAT).month() + 1;
};

export const filterDatesByMonth = (dates, month) => {
  return dates.filter((date) => getMonth(date.date) === month);
};

export const findDate = (dates, dateToFind) => {
  return dates.find(({ date }) => isSameDay(date, dateToFind));
};
