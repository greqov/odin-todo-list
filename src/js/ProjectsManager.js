import Project from './Project';

function ProjectsManager() {
  this.projects = [];
  this.defaultProject = null;
  this.currentProject = null;
}

ProjectsManager.prototype.storage = null;

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

ProjectsManager.prototype.addProject = function (id) {
  this.projects.push(id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (id) {
  if (this.defaultProject === id) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  // TODO: update this.currentProject on deleteting current project.

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.getRestoredProject = function (id) {
  return new Project(this.storage.get(`Project_${id}`));
};

export default ProjectsManager;
