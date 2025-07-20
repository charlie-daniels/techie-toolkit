
export default (() => {
  const dateToHrsMins = (date) => {
    const hrs = String(date.getHours()).padStart(2, '0');
    const mins = String(date.getMinutes()).padStart(2, '0');

    return { hrs, mins };
  };

  const getTimeHrsMins = () => {
    const currentTime = dateToHrsMins(new Date());
    
    return `${currentTime.hrs}:${currentTime.mins}`;
  };

  const hrsMinsToElapsed = (start, end) => {
    const elapsedHrs = end[0] - start[0];
    const elapsedMins = end[1] - start[1];
    const elapsedTotal = elapsedHrs + (elapsedMins / 60);
    return elapsedTotal.toFixed(2);
  };

  return {
    getTimeHrsMins,
    hrsMinsToElapsed,
  };
})();
