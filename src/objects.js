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

  return {}

})();

export { objects }