import { createClient } from '@supabase/supabase-js';

const Database = (() => {
  /* CHANGE FOR PROD BUILD */

  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
  );

  const convertDateToLocaleUTC = () => {

  };

  const insertRow = async (keyValueArray) => {
    const { error } = await supabase
      .from('activities')
      .insert(keyValueArray);

    if (error) { console.log(error); }
  };

  return {
    insertRow,
  };
})();

export const FileManager = (() => {
  /* Accepts array of objects */
  const storeActivities = (activities) => {
    activities.forEach(activity => {
      for (const [key, value] of Object.entries(activity)) {
        console.log(value, typeof value);
        if (value instanceof Date) { activity[key] = Date.parse(value).toIsoString().toLocaleString('en-GB'); }
      }
    });
    
    const dateTypes = activities.
    Database.insertRow(activities);
  };

  const loadActivities = () => {
     
  };

  return {
    storeActivities,
    loadActivities,
  };
})();
