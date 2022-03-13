import './css/styles.css';

const tmpData = {
  id: 0,
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
  project: 'Odin',
};

function Todo(data) {
  const { title = 'Untitled', dueDate = new Date(), priority = 'low', project = 'Inbox' } = data;
  this.id = 0;
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
}

const item = new Todo(tmpData);

console.log(item);
