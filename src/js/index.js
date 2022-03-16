import LocStorage from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
// import Todo from './Todo';
import demoTodosData from './data/demoTodos.json';
import archiveTodosData from './data/archiveTodos.json';

import '../css/styles.css';

function initStorage() {
  // TODO: remove clear on load
  localStorage.clear();
  const storage = new LocStorage();
  // TODO: is it a good idea?
  Project.prototype.storage = storage;
  ProjectsManager.prototype.storage = storage;
}

function initProjectsManager() {
  // create projectsManager
  const projectsManager = new ProjectsManager();
  // create default project, push it to manager
  const defautProject = new Project({ title: 'Inbox' });
  defautProject.save();
  const { id } = defautProject;
  projectsManager.defaultProject = id;
  projectsManager.currentProject = id;
  projectsManager.addProject(id);
  // ? add fn to populate storage
  defautProject.loadData(demoTodosData);
  // ? check localStorage for data, if so get it!
  return projectsManager;
}

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

initStorage();
const projectsManager = initProjectsManager();

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

const archiveProject = new Project({ title: 'Archive' });
archiveProject.loadData(archiveTodosData);
projectsManager.addProject(archiveProject.id);
