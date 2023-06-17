import renderTaskList from './taskList.js';
import saveTasks from './localStorage.js';

export default function editTaskDescription(tasks, taskIndex) {
  const newDescription = window.prompt;
  if (newDescription !== null) {
    tasks[taskIndex].description = newDescription;
    renderTaskList(tasks);
    saveTasks(tasks);
  }
}
