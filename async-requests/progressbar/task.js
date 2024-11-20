const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (event) => {
    progress.value = event.loaded / event.total;
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

  xhr.send(formData);
});
    