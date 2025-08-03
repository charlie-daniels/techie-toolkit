import { Task } from './components/task.js';
import { Selectors } from './dom-selectors.js';

export const generateNewTask = () => {
  const newTask = Task();
  Selectors.taskList.appendChild(newTask.form);
};
