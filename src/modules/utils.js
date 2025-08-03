export const Time = (() => {
  const dateToHrsMins = (date) => {
    const hrs = String(date.getHours()).padStart(2, '0');
    const mins = String(date.getMinutes()).padStart(2, '0');

    return hrs + ':' + mins;
  };

  const HrsMinsToDate = (hrsMins) => {
    const hrsMinsArr = hrsMins.split(':');

    const newDate = new Date(Date.now());
    newDate.setHours(hrsMinsArr[0]);
    newDate.setMinutes(hrsMinsArr[1]);

    return newDate;
  };

  const getElapsedTime = (start, end) => {
    return start - end;
  };

  return {
    dateToHrsMins,
    HrsMinsToDate,
    getElapsedTime,
  };
})();
