import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
import Todo from './Todo';
import '../css/styles.css';

localStorage.clear();
const storage = new LocStorage();

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

const tmpTodoItem = new Todo(tmpData);

const inboxProject = new Project({ title: 'Inbox' });

demoTodosData.forEach((i) => {
  const todo = new Todo(i);
  inboxProject.addTodo(todo);
  storage.save(todo);
});

const archiveProject = new Project({ title: 'Archive' });

archiveProject.addTodo(tmpTodoItem);
storage.save(tmpTodoItem);

projectsManager.addProject(inboxProject);
projectsManager.addProject(archiveProject);

// TODO: inboxProject.moveTodo(item, archiveProject);
storage.save(inboxProject);
storage.save(archiveProject);
storage.save(projectsManager);

console.log(projectsManager);
console.log(inboxProject);
console.log(archiveProject);
