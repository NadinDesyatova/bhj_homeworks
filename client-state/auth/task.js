const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const unSigninButton = document.getElementById('unsignin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const storedId = localStorage.getItem('storedUserId');
if (storedId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = storedId;
}

unSigninButton.addEventListener('click', () => {
  signinForm.reset();
  signin.classList.add('signin_active');
  welcome.classList.remove('welcome_active');
  localStorage.removeItem('storedUserId');  
});

signinButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);

  const xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

  xhr.responseType = 'json';

  xhr.send(formData);
    
  xhr.addEventListener('load', () => {
    const response = xhr.response;
    if (response['success'] === false || xhr.status >= 300) {
      alert('Неверный логин/пароль');
      signinForm.reset();
    } else {
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      const storedUserId = response['user_id'];
      userId.textContent = storedUserId;
      localStorage.storedUserId = storedUserId;  
    }
  });
});
