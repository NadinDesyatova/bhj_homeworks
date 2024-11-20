const xhr1 = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const poll = document.querySelector('.poll');

function sendXhr(xhr, method, url, typeOfResponse, argumentForSend = null, headers = []) {
  xhr.open(method, url, true);
  
  headers.forEach(header => xhr.setRequestHeader(header[0], header[1]));

  xhr.responseType = typeOfResponse;

  xhr.send(argumentForSend);
};

const xhr = new XMLHttpRequest();

sendXhr(xhr, 'GET', 'https://students.netoservices.ru/nestjs-backend/poll', 'json');

xhr.addEventListener('load', () => {
  const wholeResponse = xhr.response;
  const pollId = wholeResponse['id'];
  const data = wholeResponse['data'];
  pollTitle.textContent = data['title'];
  const arrayAnswers = data['answers'];
  for (let i = 0; i < arrayAnswers.length; i++) {
    pollAnswers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer"></button> ');
    const answer = document.querySelectorAll('.poll__answer')[i];
    answer.textContent = arrayAnswers[i];
    const argumentForSend = 'vote=' + pollId + '&answer='+ i;
    answer.addEventListener('click', (e) => {
      alert('Спасибо, ваш голос засчитан!');

      e.preventDefault();

      sendXhr(
        xhr, 
        'POST', 
        'https://students.netoservices.ru/nestjs-backend/poll', 
        'json', 
        argumentForSend, 
        [['Content-type', 'application/x-www-form-urlencoded']]
      );

      xhr.addEventListener('load', () => {
        pollAnswers.remove();
        const wholeResponse2 = xhr.response;
        const statistics = wholeResponse2['stat'];
        const votesNumber = +statistics.reduce((accum, item) => accum + item['votes'], 0);
        for (let i = 0; i < statistics.length; i++) {
          poll.insertAdjacentHTML('beforeEnd', '<div class="poll__title"></div>');
          poll.querySelectorAll('.poll__title')[i + 1].textContent = statistics[i]['answer'];
          const votesNumberOfAnswer = ' ' + ((statistics[i]['votes'] / votesNumber) * 100).toFixed(2) + '%';
          const pollTitleCurrent = poll.querySelectorAll('.poll__title')[i + 1];
          pollTitleCurrent.insertAdjacentHTML('beforeEnd', '<b></b>');
          pollTitleCurrent.querySelector('b').textContent = votesNumberOfAnswer;
        }
      });
    });
  }
});
