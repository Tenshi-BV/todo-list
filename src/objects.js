const objects = (() => {

  class project {

    constructor(name) {
      this.name = name;
      this.todosArray = [];
    }

  }

  class todo {

    constructor(name, description, dueDate, priority, project) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.creatonDate = new Date();
      this.project = project;
      this.completion = 0;
    }
  }

  const projectArray = [];

  const projectMethods = (() => {

  const createProject = () => {
    let name = prompt("New project name:");
      if ( name == "" ) { return };
    const proj = new project(name);
    projectArray.push(proj);
    }

  const deleteProject = (position) => {
    if ( position == 0) { return };
    projectArray.splice(position, 1);
    }

  const renameProject = (position) => {
    if ( position == 0) { return };
    projectArray[position].name = prompt("New name:");
    }

  return { createProject, deleteProject, renameProject }

  })();

  const defaultProject = new project('Default project');
  projectArray.push(defaultProject);

  const todosMethods = (() => {

    const createTodo = (project) => {
      let name = prompt('New todo name:');
      let description = prompt('Describe todo:');
      let dueDate = prompt('Set due date;');
      let priority = prompt('Set priority:');
      if (name == "" || description == "" || dueDate == "" || priority == "") { return };
      const newTodo = new todo(name,description,dueDate,priority,project);
      project.todosArray.push(newTodo);
    }

    const deleteTodo = (project, position) => {
      project.todosArray.splice(position, 1);
    }

    const renameTodo = (todo) => {
      todo.name = prompt('New todo name:');
    }

    const reDescribeTodo = (todo) => {
      todo.description = prompt('Describe todo:');
    }

    const reDateTodo = (todo) => {
      todo.dueDate = prompt('Set due date;');
    }

    const rePrioritiseTodo = (todo) => {
      todo.priority = prompt('Set priority:');
    }

    const setCompletionTodo = (todo) => {
      if (todo.completion == 0) {
        todo.completion = 1;
      } else {
        todo.completion = 0;
      }
    }

    return { createTodo, deleteTodo, renameTodo, reDescribeTodo, reDateTodo, rePrioritiseTodo, setCompletionTodo }

  })();

  return { projectArray, projectMethods, todosMethods }

})();

export { objects }