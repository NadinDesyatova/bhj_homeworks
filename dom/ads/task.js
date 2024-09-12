const rotatorCases = document.querySelectorAll('.rotator__case');

const caseActivation = () => { 
  let activeCase = document.querySelector('.rotator__case_active');
  activeCase.classList.remove('rotator__case_active');
  activeCase = activeCase.nextElementSibling;
  if (activeCase === null) {
    activeCase = rotatorCases[0];
  };  
  activeCase.classList.add('rotator__case_active');
  activeCase.style.color = activeCase.dataset.color;
  return activeCase.dataset.speed;
};

const intervalSetting = () => {
  delay = caseActivation();
  clearInterval(interval);
  interval = setInterval(intervalSetting, delay);
};

let delay = document.querySelector('.rotator__case_active').dataset.speed;
let interval = setInterval(intervalSetting, delay);
