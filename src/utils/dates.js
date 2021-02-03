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
  return moment(date).month();
};

export const filterDatesByMonth = (dates, month) => {
  return dates.filter((date) => {
    return getMonth(date) === month;
  });
};
