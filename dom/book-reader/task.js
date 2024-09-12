const bookContent = document.querySelector('.book');

const parameterSwitching = (controlContainerName, controlContainerElementsName, activeClass, textOptionName, dataAttr) => {
  const controlContainerClass = `book__control_${controlContainerName}`;
  const container = document.querySelector(`.${controlContainerClass}`);
  [...container.querySelectorAll(`.${controlContainerElementsName}`)].forEach((element) => {
    element.addEventListener('click', (event) => {
      const activeClassName = `${activeClass}_active`;
      const activeElement= container.querySelector(`.${activeClassName}`);
      activeElement.classList.remove(activeClassName);
      if (activeElement.dataset[dataAttr]) {
        bookContent.classList.remove(`book_${textOptionName}-${activeElement.dataset[dataAttr]}`);
      };          
      element.classList.add(activeClassName);
      const currentTextOptionClass = element.dataset[dataAttr] 
        ? `book_${textOptionName}-${element.dataset[dataAttr]}` 
        : '';
      bookContent.classList.add(currentTextOptionClass);
      event.preventDefault();
    });
  });
};

const fontSizeToggle = ['font-size', 'font-size', 'font-size', 'fs', 'size'];
const textColorToggle = ['color', 'color', 'color', 'color', 'textColor'];
const bgColorToggle = ['background', 'color', 'color', 'bg', 'bgColor'];

parameterSwitching(...fontSizeToggle);
parameterSwitching(...textColorToggle);
parameterSwitching(...bgColorToggle);
