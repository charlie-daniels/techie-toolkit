import TimeManager from './TimeManager.js';
import { FileManager } from './Storage.js';

/* TODO: 
  Move imports to index.js
  Requires module class restructure
  Must be called from index.js

  Rewrite to have forms that submit the info when task is ended? or when store activities is pressed.
*/

const createActivityElement = () => {
    const newElem = document.createElement('div');
    newElem.classList.add('activity', 'unset');

    const upperDiv = document.createElement('div');
    upperDiv.className = 'upper';
    const lowerDiv = document.createElement('div');
    lowerDiv.className = 'lower';

    const project = Object.assign(document.createElement('input'), {
      className: 'project value',
      placeholder: '0000',
      maxLength: 4,
    });

    const task = Object.assign(document.createElement('input'), {
      className: 'task value',
      placeholder: 'task...',
    });

    const startTime = Object.assign(document.createElement('p'), {
      className: 'start-time status-complete-start value date-type',
      textContent: TimeManager.getTimeHrsMins(),
    });

    const endTime = Object.assign(document.createElement('p'), {
      className: 'end-time status-complete-end unset value date-type', 
    });

    const elapsedTime = Object.assign(document.createElement('p'), {
      className: 'elapsed-time status-complete value', 
    });

    const btnEndTask = Object.assign(document.createElement('button'), {
      className: 'end-task status-incomplete unset', 
      textContent: 'end task',
    });

    /* TODO: move this to listener section and segment */

    /* complete task, set time, set elapsed time */

    btnEndTask.addEventListener('click', () => {
      endTime.classList.remove('unset');
      newElem.classList.remove('unset');
      btnEndTask.classList.add('hidden');

      endTime.textContent = TimeManager.getTimeHrsMins();

      const start = startTime.textContent.split(':');
      const end = endTime.textContent.split(':');
      const elapsed = TimeManager.hrsMinsToElapsed(start, end);

      elapsedTime.textContent = `${elapsed}`;
    }, { once: true });

    upperDiv.append(project, task);
    lowerDiv.append(startTime, endTime, elapsedTime, btnEndTask);
    
    newElem.append(upperDiv, lowerDiv);
    return newElem;
};

const appendActivity = () => {
  const activityList = document.querySelector('.activities > .list');
  const newElem = createActivityElement();
  activityList.insertBefore(newElem, activityList.firstChild);
};

const focusNewActivity = () => {
  document.querySelector('.activities > .list :first-child .project').focus();
};

/* Listeners */

/* Sorts activities into array of objects with key value pairs. Assumes first class is key */
const initGetAllActivites = () => {
  const getActivitiesValues = () => {
    return [...document.querySelectorAll('.activity')].map((activity) => {
      return [...activity.querySelectorAll('.value')].reduce((obj, next) => {
        /* If time value, convert to Date type */
        return next.classList.contains('date-type') ?
        {...obj, [next.classList[0]]: TimeManager.HrsMinsToDate(next.textContent)} :
        {...obj, [next.classList[0]]: next.textContent || next.value} ;
      }, {});
    });
  };

  const btnStoreActivities = document.querySelector('#store-activities');
  btnStoreActivities.addEventListener('click', () => {
    FileManager.storeActivities(getActivitiesValues());
  });
};

/* Create new element and focus the first input of it */
const initDetectNewActivity = () => {
  const btnNewActivity = document.querySelector('#new-activity');
  btnNewActivity.addEventListener('click', () => {
    appendActivity();
    focusNewActivity();
  });
};

const addListeners = (() => {
  initGetAllActivites();
  initDetectNewActivity();
})();
