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

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});

// TODO: maybe add more precise dom node, not document?
document.addEventListener('submit', (e) => {
  console.log('submit action');
  const { target } = e;

  if (target.classList.contains('js-form-add-project')) {
    e.preventDefault();
    // TODO: use form submit? not button click?
    const form = target;
    const data = Object.fromEntries(new FormData(form).entries());
    const project = new Project(data);
    project.save();
    console.log(project);
    form.reset();
    ui.renderProject(project.id);
    projectsManager.addProject(project.id);
    return;
  }

  if (target.classList.contains('js-form-add-todo')) {
    e.preventDefault();
    const form = target;
    const data = Object.fromEntries(new FormData(form).entries());
    form.reset();
    // TODO: add todo to project
    const projectId = projectsManager.currentProject;
    const project = ui.pm.getRestoredProject(projectId);
    const todoId = project.addTodo(data);
    // TODO: avoid shaking storage 2 times! (on save, on render)
    ui.renderTodo(todoId);
  }
});

const todoList = document.querySelector('.js-todo-list');
todoList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-todo-delete')) {
    console.log('do delete action');
    const todoEl = target.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id.split('_')[1];
    // 2. get project (hint: current project)
    const projectId = ui.pm.currentProject;
    const project = ui.pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
  } else if (target.classList.contains('js-btn-todo-edit')) {
    console.log('do edit action');
  }
});

const projectsList = document.querySelector('.js-projects-list');
projectsList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('js-btn-project-delete')) {
    console.log('do delete project action!');
    const projectEl = target.closest('.js-project-item');
    const projectId = projectEl.id.split('_')[1];
    // TODO: I don't like ui.pm
    ui.pm.deleteProject(projectId);

    if (projectId !== ui.pm.defaultProject) {
      projectEl.remove();
    }
  }
});
