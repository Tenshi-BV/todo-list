const objects = (() => {

  class project {

    constructor(name) {
      this.name = name;
    }
  }

  class todo {

    constructor(name, description, dueDate, priority) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.creatonDate = new Date();
      this.project = "default";
      this.completion = 0;
    }
  }

  const projectArray = [];
  const todoArray = [];

  const projectMethods = (() => {

  const createProject = () => {
    let name = prompt("New project name:");
      if ( name == "" ) { return };
    const proj = new project(name);
    projectArray.push(proj);
    }

  const deleteProject = (project) => {
    if ( project === defaultProject) { return };
    let pos = projectArray.indexOf(project);
    projectArray.splice(pos, 1);
    }

  const renameProject = (project) => {
    project.name = prompt("New name:");
    }

  return { createProject, deleteProject, renameProject }

  })();

  const defaultProject = new project('Default project');
  projectArray.push(defaultProject);

  return { projectArray, projectMethods }

})();

export { objects }