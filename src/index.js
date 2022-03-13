import Todo from './js/Todo';
import './css/styles.css';

// TODO: move index.js inside src/js?

const tmpData = {
  id: 0,
  title: 'The body is ROUND',
  dueDate: '2022-02-10',
  priority: 'low',
  project: 'Odin',
};

const item = new Todo(tmpData);

console.log(item);
