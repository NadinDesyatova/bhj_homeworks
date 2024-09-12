const revealElements = document.querySelectorAll('.reveal');

const isVisible = (element) => {
  const {top, bottom} = element.getBoundingClientRect();
  const result = bottom < 0
  ? false
  : top > window.innerHeight
    ? false
    : true;
  return result;
};

window.addEventListener('scroll', () => {
  [...revealElements].forEach((element) => {
    isVisible(element) ? element.classList.add('reveal_active') : element.classList.remove('reveal_active');
  });
});
