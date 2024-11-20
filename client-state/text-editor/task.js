const textEditorField = document.getElementById('editor');

textEditorField.addEventListener('input', () => {
  localStorage.textValue = textEditorField.value;
});

textEditorField.value = localStorage.getItem('textValue');
