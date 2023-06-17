import renderTaskList from './modules/taskList.js';
import addTask from './modules/addTask.js';
import initializeListUI from './modules/listUI.js';
import saveTasks, { loadTasks } from './modules/localStorage.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';

import './style.css';

let tasks = loadTasks();

const taskInput = document.getElementById('task-input');
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const description = taskInput.value.trim();
    if (description !== '') {
      addTask(tasks, description);
      taskInput.value = '';
      saveTasks(tasks);
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  renderTaskList(tasks);
  initializeListUI();

  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', () => {
    tasks = tasks.filter((task) => !task.completed);

    clearCompletedTasks(tasks);
    renderTaskList(tasks);
    saveTasks(tasks);
  });
});
