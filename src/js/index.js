import { projectsManager } from './ProjectsManager';
import { ui } from './UI';
import '../css/styles.css';

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
