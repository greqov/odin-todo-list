import { storage } from './LocStorage';
import ProjectsManager from './ProjectsManager';
import Project from './Project';
import UI from './UI';
import demoTodosData from './data/demoTodos.json';
import archiveTodosData from './data/archiveTodos.json';

import '../css/styles.css';

const projectsManager = (function initPM() {
  let pm;

  if (storage.isEmpty()) {
    pm = new ProjectsManager({});
    const defautProject = new Project({ title: 'Inbox' });
    defautProject.save();
    const { id } = defautProject;
    pm.defaultProject = id;
    pm.currentProject = id;
    pm.addProject(id);
    // defautProject.loadData(demoTodosData);
  } else {
    const data = storage.get('ProjectsManager_');
    pm = new ProjectsManager(data);
  }

  return pm;
})();

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

const ui = new UI(projectsManager, storage);
ui.init();

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

// const archiveProject = new Project({ title: 'Archive' });
// console.log(`archiveProject`, archiveProject);
// archiveProject.save();
// archiveProject.loadData(archiveTodosData);
// projectsManager.addProject(archiveProject.id);

ui.renderProjectTodos();

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});
