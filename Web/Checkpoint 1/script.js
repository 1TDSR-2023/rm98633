const taskForm = document.getElementById('task-form');
const descriptionInput = document.getElementById('description');
const authorInput = document.getElementById('author');
const departmentInput = document.getElementById('department');
const importanceInput = document.getElementById('importance');
const valueInput = document.getElementById('value');
const durationInput = document.getElementById('duration');
const taskList = document.getElementById('task-list');
const tasks = [];

function renderTaskList() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.description}</td>
      <td>${task.author}</td>
      <td>${task.department}</td>
      <td>${task.importance}</td>
      <td>${task.value || '-'}</td>
      <td>${task.duration || '-'}</td>
      <td>
        <button onclick="deleteTask(${i})">Excluir</button>
      </td>
    `;
    taskList.appendChild(row);
  }
}

function addTask(event) {
  event.preventDefault();
  const description = descriptionInput.value.trim();
  const author = authorInput.value.trim();
  const department = departmentInput.value.trim();
  const importance = parseInt(importanceInput.value);
  const value = valueInput.value !== '' ? parseFloat(valueInput.value) : null;
  const duration = durationInput.value !== '' ? parseFloat(durationInput.value) : null;

  if (description && author && department && importance) {
    const task = {
      description,
      author,
      department,
      importance,
      value,
      duration,
    };
    tasks.push(task);
    renderTaskList();
    taskForm.reset();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

taskForm.addEventListener('submit', addTask);

renderTaskList();
