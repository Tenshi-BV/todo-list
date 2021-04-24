const objects = (() => {

  class project {

    constructor(name) {
      this.name = name;
    }

    sayHi() {
      alert(this.name);
    }

  }

  class todo {

    constructor(name) {
      this.name = name;
    }

    sayHi() {
      alert(this.name);
    }

  }

  const projectArray = [];
  const todoArray = [];
  

})();



export { objects }