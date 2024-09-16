const hasTooltipElements = document.querySelectorAll('.has-tooltip');
  
const createTooltipElement = (hasTooltipElement) => {
  const tooltipText = hasTooltipElement.getAttribute('title');
  const tooltipHtml = `<div class="tooltip">${tooltipText}</div>`;
  hasTooltipElement.insertAdjacentHTML('afterEnd', tooltipHtml);
};

[...hasTooltipElements].forEach((element) => {
  createTooltipElement(element);
});

[...hasTooltipElements].forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

[...hasTooltipElements].forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const currentTooltip = element.nextElementSibling;
    currentTooltip.classList.add('tooltip_active');   
  });
});
  
[...hasTooltipElements].forEach((element) => {
  element.addEventListener('mouseup', (event) => {
    event.preventDefault();
    const currentTooltip = element.nextElementSibling;
    currentTooltip.classList.remove('tooltip_active');
  });
});