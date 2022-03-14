import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
import Todo from './Todo';
import '../css/styles.css';

(function initStorage() {
  localStorage.clear();
  const storage = new LocStorage();
  // TODO: is it a good idea?
  Project.prototype.storage = storage;
  ProjectsManager.prototype.storage = storage;
})();

const projectsManager = new ProjectsManager();

const demoTodosData = [
  {
    title: 'The body is Round',
    dueDate: '2022-02-03',
    priority: 'middle',
  },
  {
    title: 'Squash that cat',
    dueDate: '2022-02-08',
    priority: 'middle',
  },
  {
    title: 'Look at this gentelman',
    dueDate: '2022-02-01',
    priority: 'high',
  },
];

const tmpData = {
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
};

// TODO: auto add todo to project on create
const tmpTodoItem = new Todo(tmpData);

const inboxProject = new Project({ title: 'Inbox' });
// TODO: save project immediately?

demoTodosData.forEach((i) => {
  const todo = new Todo(i);
  inboxProject.addTodo(todo);
});

const archiveProject = new Project({ title: 'Archive' });

archiveProject.addTodo(tmpTodoItem);

projectsManager.addProject(inboxProject);
projectsManager.addProject(archiveProject);

console.log(projectsManager);
console.log(inboxProject);
console.log(archiveProject);
