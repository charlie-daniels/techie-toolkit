import { createClient } from '@supabase/supabase-js';

/* Not implemented */

const Database = (() => {
  const supabase = createClient(

  );

  const convertDateToLocaleUTC = () => {

  };

  const insertRow = async () => {
    const { error } = await supabase
      .from()
      .insert();
    if (error) { console.log(error); }
  };

  return {
    insertRow,
  };
})();
