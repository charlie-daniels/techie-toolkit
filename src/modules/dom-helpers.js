export const createElement = (tag = 'div', classList = [], textContent = '') => {
  return Object.assign(document.createElement(tag), {
    classList,
    textContent,
  });
};

export const createElementInput = (name, classList = [], placeholder = '', value = '', type = 'text' ) => {
  return Object.assign(document.createElement('input'), {
    name,
    classList,
    placeholder,
    value,
    type,
  });
};

export const appendChildren = (parent, ...children) => {
  children.forEach((child) => parent.appendChild(child));
};
