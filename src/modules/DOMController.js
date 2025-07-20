const createActivityElement = () => {
    const newElem = document.createElement('div');
    newElem.classList.add('activity', 'unset');

    const upperDiv = document.createElement('div');
    upperDiv.className = 'upper';
    const lowerDiv = document.createElement('div');
    lowerDiv.className = 'lower';

    const project = Object.assign(document.createElement('input'), {
      className: 'project',
      placeholder: '0000',
      maxLength: 4,
    });

    const task = Object.assign(document.createElement('input'), {
      className: 'task',
      placeholder: 'task...',
    });

    upperDiv.append(project, task);

    const getTimeHrsMins = () => {
      const currentTime = new Date();
      const hours = String(currentTime.getHours()).padStart(2, '0');
      const mins = String(currentTime.getMinutes()).padStart(2, '0');
      return `${hours}:${mins}`;
    };

    const startTime = Object.assign(document.createElement('p'), {
      className: 'start-time',
      textContent: getTimeHrsMins(),
    });

    const endTime = Object.assign(document.createElement('p'), {
      className: 'end-time unset', 
      textContent: 'end task',
    });

    const elapsedTime = Object.assign(document.createElement('p'), {
      className: 'elapsed-time', 
    });

    // complete task, set time, calc elapsed time
    endTime.addEventListener('click', () => {
      endTime.classList.remove('unset');
      endTime.textContent = getTimeHrsMins();
      newElem.classList.remove('unset');

      const start = startTime.textContent.split(':');
      const end = endTime.textContent.split(':');
      const elapsedHrs = end[0] - start[0];
      const elapsedMins = end[1] - start[1];
      const elapsedTotal = elapsedHrs + (elapsedMins / 60);
      elapsedTime.textContent = `${elapsedTotal.toFixed(2)}`;
    }, { once: true });

    lowerDiv.append(startTime, endTime, elapsedTime);
    
    newElem.append(upperDiv, lowerDiv);
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
