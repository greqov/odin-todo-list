import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
// import Todo from './Todo';
import UI from './UI';
import demoTodosData from './data/demoTodos.json';
import archiveTodosData from './data/archiveTodos.json';

import '../css/styles.css';

const storage = (function initStorage() {
  // TODO: remove clear on load
  localStorage.clear();
  const storageEntity = new LocStorage();
  // TODO: is it a good idea?
  Project.prototype.storage = storageEntity;
  ProjectsManager.prototype.storage = storageEntity;
  return storageEntity;
})();

const projectsManager = (function initProjectsManager() {
  const pm = new ProjectsManager();
  const defautProject = new Project({ title: 'Inbox' });
  defautProject.save();
  const { id } = defautProject;
  pm.defaultProject = id;
  pm.currentProject = id;
  pm.addProject(id);
  // ? add fn to populate storage
  defautProject.loadData(demoTodosData);
  // ? check localStorage for data, if so get it!
  return pm;
})();

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

const ui = new UI(projectsManager, storage);

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

const archiveProject = new Project({ title: 'Archive' });
archiveProject.loadData(archiveTodosData);
projectsManager.addProject(archiveProject.id);

archiveProject.todos.forEach((id) => {
  ui.renderTodo(id);
});

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});

function submitProjectForm(e) {
  e.preventDefault();
  let project;
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());

  // NOTE: update OR create action
  if (data.id) {
    project = projectsManager.getRestoredProject(data.id);
    project.update(data);
  } else {
    project = new Project(data);
    projectsManager.addProject(project.id);
  }

  project.save();
  form.reset();
  form.querySelector('[name="id"]').value = '';
  ui.renderProject(project.id);
}

function submitTodoForm(e) {
  e.preventDefault();
  let todo;
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('data from form:', data);

  const projectId = projectsManager.currentProject;
  const project = ui.pm.getRestoredProject(projectId);

  // NOTE: update OR create action
  if (data.id) {
    console.log('update action');
    todo = ui.storage.get(`Todo_${data.id}`);
    console.log('object from storage', todo);
    Object.assign(todo, data);
    console.warn('TODO: update complete value!');
  } else {
    console.log('create action');
    todo = data;
  }

  console.log('new object', todo);

  const todoId = project.addTodo(todo);
  form.reset();
  form.querySelector('[name="id"]').value = '';
  form.querySelector('[name="complete"]').removeAttribute('checked');
  // TODO: avoid shaking storage 2 times! (on save, on render)
  ui.renderTodo(todoId);
}

// TODO: maybe add more precise dom node, not document?
document.addEventListener('submit', (e) => {
  console.log('submit action');
  const { target } = e;

  if (target.classList.contains('js-form-add-project')) {
    submitProjectForm(e);
    return;
  }

  if (target.classList.contains('js-form-add-todo')) {
    submitTodoForm(e);
  }
});

const todoList = document.querySelector('.js-todo-list');
todoList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-todo-delete')) {
    console.log('do delete action');
    const todoEl = target.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id;
    // 2. get project (hint: current project)
    const projectId = ui.pm.currentProject;
    const project = ui.pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
  } else if (target.classList.contains('js-btn-todo-edit')) {
    console.log('do edit todo action');
    // 1. get todo details from storage
    const todoId = target.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);
    console.log('data', data);

    const form = document.querySelector('.js-form-add-todo');
    // 2. populate form
    Object.entries(data).forEach(([key, value]) => {
      try {
        console.log(1, key, value);
        if (key !== 'complete') {
          form.querySelector(`[name="${key}"]`).value = value;
        } else if (value === true) {
          form.querySelector(`[name="${key}"]`).setAttribute('checked', true);
        }
      } catch (error) {
        console.warn(`Missing [name="${key}"] element\n`, error);
      }
    });
  }
});

const projectsList = document.querySelector('.js-projects-list');
projectsList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-project-delete')) {
    console.log('do delete project action!');
    const projectEl = target.closest('.js-project-item');
    const projectId = projectEl.id;
    // TODO: I don't like ui.pm
    ui.pm.deleteProject(projectId);

    if (projectId !== ui.pm.defaultProject) {
      projectEl.remove();
    }
  } else if (target.classList.contains('js-btn-project-edit')) {
    // 1. get project details
    const projectId = target.closest('.js-project-item').id;
    const data = storage.get(`Project_${projectId}`);
    const form = document.querySelector('.js-form-add-project');
    // TODO: add loop
    form.querySelector('[name="title"]').value = data.title;
    form.querySelector('[name="id"]').value = data.id;
    // 2. TODO: show form with populated data (in modal?)
  }
});
