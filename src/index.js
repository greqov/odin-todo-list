import generateId from './js/utils/id';
import './css/styles.css';

const tmpData = {
  id: 0,
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
  project: 'Odin',
};

// TODO: not sure about passing id
function Todo(data) {
  const {
    id = generateId(),
    title = 'Untitled',
    dueDate = new Date(),
    priority = 'low',
    project = 'Inbox',
  } = data;

  this.id = id;
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
}

const item = new Todo(tmpData);

console.log(item);
