import { storage } from './LocStorage';
import { projectsManager } from './ProjectsManager';
import UI from './UI';
import demoTodosData from './data/demoTodos.json';
import archiveTodosData from './data/archiveTodos.json';

import '../css/styles.css';

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
