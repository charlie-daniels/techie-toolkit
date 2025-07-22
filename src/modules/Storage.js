export default (() => {
  /* Requires redefinition for multiple activities */

  /* Accepts array of objects */
  const storeActivities = (activities) => {
    activities.forEach(activity => {
      for (let i = 0; i < Object.keys(activity).length; i++) {
        localStorage.setItem(Object.keys(activity)[i], Object.values(activity)[i]);
      }
    });
  };

  return {
    storeActivities,
  };
})();
