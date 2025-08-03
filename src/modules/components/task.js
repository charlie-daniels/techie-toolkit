import { createElement, createElementInput, appendChildren } from '../dom-helpers.js';
import { TaskModel } from '../models/task-model.js';
import { Time } from '../utils.js';

export const Task = (model = TaskModel) => {
  const form = createElement('form', ['task']);

  const config = [
    ['project', 'project', ['project'], model.project],
    ['content', 'content', ['content'], model.content],
    ['dateStart', 'date-start', ['date-start'], Time.dateToHrsMins(model.dateStart)],
    ['dateEnd', 'date-end', ['date-end', 'hidden'], Time.dateToHrsMins(model.dateEnd)],
    ['submit', 'end-task', [], '', 'end task', 'submit'],
  ];

  const inputs = Object.fromEntries(
    config.map(([key, name, classList, placeholder, value, type]) => [
      key,
      createElementInput(name, classList, placeholder, value, type),
    ])
  );

  appendChildren(form, ...Object.values(inputs));

  return { form, inputs };
};
