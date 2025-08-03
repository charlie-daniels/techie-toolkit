const qs = (selector) => document.querySelector(selector);

export const Selectors = {
  navMenu: qs('nav .menu'),
  taskList: qs('.tasks .list'),
  jobsList: qs('.jobs .list'),
  newTask: qs('.new-task'),
};
