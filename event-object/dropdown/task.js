const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');


dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.add("dropdown__list_active");
  [...dropdownItems].forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      dropdownList.classList.remove("dropdown__list_active");
      dropdownBtn.textContent = item.textContent;
    });
  });
});