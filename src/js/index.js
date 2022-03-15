import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
import Todo from './Todo';
import demoTodosData from './data/demoTodos.json';
import archiveTodosData from './data/archiveTodos.json';

import '../css/styles.css';

(function initStorage() {
  localStorage.clear();
  const storage = new LocStorage();
  // TODO: is it a good idea?
  Project.prototype.storage = storage;
  ProjectsManager.prototype.storage = storage;
})();

const projectsManager = new ProjectsManager();

// TODO: auto add todo to project on create

const inboxProject = new Project({ title: 'Inbox' });
// TODO: save project immediately?

demoTodosData.forEach((todo) => {
  inboxProject.addTodo(new Todo(todo));
});

const archiveProject = new Project({ title: 'Archive' });

archiveTodosData.forEach((todo) => {
  archiveProject.addTodo(new Todo(todo));
});

projectsManager.addProject(inboxProject);
projectsManager.addProject(archiveProject);

console.log(projectsManager);
console.log(inboxProject);
console.log(archiveProject);
