export const TaskModel = ((
    owner = 'USER', 
    project = '0000', 
    content = '', 
    dateStart = new Date(Date.now()), 
    dateEnd = new Date(Date.now())
  ) => {
  return {
    id: crypto.randomUUID(),
    owner,
    project,
    content,
    dateStart,
    dateEnd,
  };
})();
