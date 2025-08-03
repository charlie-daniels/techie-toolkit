import { Selectors } from './dom-selectors.js';
import { generateNewTask } from './handlers.js';

export const initEvents = () => {
  Selectors.newTask.addEventListener('click', generateNewTask);
};
