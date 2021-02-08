import { getMonth } from "./dates";

export const PERCENT_FROM_CASH = 4;
export const WORKING_HOURS_IN_ONE_DAY = 13.5;

export const MONTHS = {
  1: "Січень",
  2: "Лютий",
  3: "Березень",
  4: "Квітень",
  5: "Травень",
  6: "Червень",
  7: "Липень",
  8: "Серпень",
  9: "Вересень",
  10: "Жовтень",
  11: "Листопад",
  12: "Грудень",
};

export const getPercentFromCash = (total) => {
  return (total * PERCENT_FROM_CASH) / 100;
};

export const getTotalCash = (dates = []) => {
  if (!dates.length) {
    return 0;
  }

  const totalCash = dates
    .map((date) => Number(date.cash))
    .reduce((accum, cash) => accum + cash);

  return getPercentFromCash(totalCash);
};

export const getTotalWorkingDays = (dates) => {
  return dates.length;
};

export const getTotalWorkingHours = (dates) => {
  return dates.length * WORKING_HOURS_IN_ONE_DAY;
};

export const sortDatesByMonths = (dates) => {
  const map = {};

  dates.forEach(({ date, cash }) => {
    const month = getMonth(date);

    if (map.hasOwnProperty(month)) {
      map[getMonth(date)].push(cash);
    } else {
      map[month] = [];
      map[month].push(cash);
    }
  });

  return map;
};

export const getCashByMonths = (dates = []) => {
  const map = sortDatesByMonths(dates);

  for (let key in map) {
    map[key] = getPercentFromCash(
      map[key].reduce((accum = 0, cash) => Number(accum) + Number(cash))
    );
  }

  const data = [];

  for (let key in map) {
    data.push({
      month: MONTHS[key],
      cash: map[key],
    });
  }

  return data;
};

export const getWorkingDaysByMonths = (dates = []) => {
  const map = sortDatesByMonths(dates);

  const data = [];

  for (let key in map) {
    data.push({
      month: MONTHS[key],
      days: map[key].length,
    });
  }

  return data;
};
