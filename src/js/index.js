import ProjectsManager from './ProjectsManager';
import Project from './Project';
import Todo from './Todo';
import '../css/styles.css';

const projectsManager = new ProjectsManager();
console.log(projectsManager);

const tmpData = {
  id: 0,
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
};

const item = new Todo(tmpData);
console.log(item);

const inboxProject = new Project({ title: 'Inbox' });
console.log(inboxProject);

inboxProject.addTodo(item);
console.log(inboxProject);

projectsManager.addProject(inboxProject);
console.log(projectsManager.projects);
