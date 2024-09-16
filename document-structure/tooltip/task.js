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
    const currentTooltip = element.nextElementSibling;
    if (element.dataset.toolTip === 'active') {
      currentTooltip.classList.toggle('tooltip_active');
    } else {
      [...hasTooltipElements].forEach((element) => {
        element.nextElementSibling.classList.remove('tooltip_active');
        element.dataset.toolTip = '';
      });
      element.dataset.toolTip = 'active';
      const {top, left} = element.getBoundingClientRect();
      currentTooltip.style.left = `${left}px`;
      currentTooltip.style.top = `${top + 20}px`;
      currentTooltip.classList.add('tooltip_active');
    }
  });
});