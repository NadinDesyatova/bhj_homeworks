const addingTaskButton = document.getElementById('tasks__add');
const taskInputElement = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

const removeHandler = (removeElement) => {
  removeElement.closest('.task').remove();
};

const createNewTask = () => {
  const taskText = taskInputElement.value;
  const taskHtml = `<div class="task">
                    <div class="task__title">
                    ${taskText}
                    </div>
                    <a href="#" onclick="removeHandler(this)" class="task__remove">&times;</a>
                    </div> `;
  tasksList.insertAdjacentHTML('afterBegin', taskHtml);
  taskInputElement.value =  "";
};


addingTaskButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (taskInputElement.value) {
    createNewTask();  
  }
});





  