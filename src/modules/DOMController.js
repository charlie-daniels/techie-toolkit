const createActivityElement = () => {
    const newElem = document.createElement('div');
    newElem.classList.add('activity');

    const project = Object.assign(document.createElement('input'), {
      className: 'project',
      placeholder: '0000',
      maxLength: 4,
    });

    const task = Object.assign(document.createElement('input'), {
      className: 'task',
      placeholder: 'task...',
    });

    const getTimeHrsMins = () => {
      const currentTime = new Date();
      return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    };

    const startTime = Object.assign(document.createElement('p'), {
      className: 'start-time',
      textContent: getTimeHrsMins(),
    });

    const endTime = Object.assign(document.createElement('p'), {
      className: 'end-time unset', 
      textContent: 'complete',
    });

    const elapsedTime = Object.assign(document.createElement('p'), {
      className: 'elapsed-time', 
    });

    // complete task, set time, calc elapsed time
    endTime.addEventListener('click', () => {
      endTime.classList.remove('unset');
      endTime.textContent = getTimeHrsMins();

      const start = startTime.textContent.split(':');
      const end = endTime.textContent.split(':');
      const elapsedHrs = end[0] - start[0];
      const elapsedMins = end[1] - start[1];
      const elapsedTotal = elapsedHrs + (elapsedMins / 60);
      elapsedTime.textContent = `${elapsedTotal.toFixed(2)}`;
    }, { once: true });

    newElem.append(
      project,
      task,
      startTime,
      endTime,
      elapsedTime
    );
    return newElem;
};

const appendActivity = () => {
  const activityList = document.querySelector('.activity-list');
  const newElem = createActivityElement();
  activityList.insertBefore(newElem, activityList.firstChild);
};

const focusNewActivity = () => {
  document.querySelector('.activity-list :first-child .project').focus();
};

// Listeners

// Create new element and focus the first input of it 
const detectNewActivity = () => {
  const btnNewActivity = document.querySelector('.new-activity');
  btnNewActivity.addEventListener('click', () => {
    appendActivity();
    focusNewActivity();
  });
};

const addListeners = (() => {
  detectNewActivity();
})();
