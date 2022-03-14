import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
import Todo from './Todo';
import '../css/styles.css';

localStorage.clear();
const storage = new LocStorage();

const projectsManager = new ProjectsManager();

const tmpData = {
  id: 0,
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
};

const item = new Todo(tmpData);
console.log('brand new todo', item);
console.log('check for methods', item.update);

storage.save('todoha', item);
const a = storage.get('todoha');
console.log('todoha', a);
console.log('check for methods', a.update);

const inboxProject = new Project({ title: 'Inbox' });
inboxProject.addTodo(item);

const archiveProject = new Project({ title: 'Archive' });

projectsManager.addProject(inboxProject);
projectsManager.addProject(archiveProject);

inboxProject.moveTodo(item, archiveProject);

console.log(projectsManager);
