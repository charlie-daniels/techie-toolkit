export const state = {
  tasks: [],
};

export const addTask = (task) => {
  state.tasks.push(task);
};
