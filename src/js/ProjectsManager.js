import { storage } from './LocStorage';
import Project from './Project';

function ProjectsManager({ projects, defaultProject, currentProject }) {
  this.projects = projects || [];
  this.defaultProject = defaultProject || null;
  this.currentProject = currentProject || null;
}

ProjectsManager.prototype.storage = storage;

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

ProjectsManager.prototype.addProject = function (id) {
  this.projects.push(id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (id) {
  if (id === this.defaultProject) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  if (id === this.currentProject) {
    this.setCurrentProject(this.defaultProject);
  }

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.getRestoredProject = function (id) {
  return new Project(this.storage.get(`Project_${id}`));
};

ProjectsManager.prototype.setCurrentProject = function (id) {
  this.currentProject = id;
  this.save();
};

export default ProjectsManager;
