export const PERCENT_FROM_CASH = 4;
export const WORKING_HOURS_IN_ONE_DAY = 13.5;

export const getTotalCash = (dates = []) => {
  if (!dates.length) {
    return 0;
  }

  const totalCash = dates
    .map((date) => Number(date.cash))
    .reduce((accum, cash) => accum + cash);

  return (totalCash * PERCENT_FROM_CASH) / 100;
};

export const getTotalWorkingDays = (dates) => {
  return dates.length;
};

export const getTotalWorkingHours = (dates) => {
  return dates.length * WORKING_HOURS_IN_ONE_DAY;
};
