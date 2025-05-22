"use strict";

const ToDoList = {
  tasks: [
    {
      id: 1,
      title: "Помыть посуду",
      description: "С фэри",
      priority: 1,
    },
  ],

  addTask(title, description, priority) {   //Был добавлен аргумент description
    const newId =
      this.tasks.length === 0
        ? 1
        : Math.max(...this.tasks.map((task) => task.id)) + 1;
    this.tasks.push({ id: newId, title, description, priority });  // description пушится при добалении новой таски
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTask(id, newParams) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      if (newParams.title !== undefined) {
        task.title = newParams.title;
      }
      if (newParams.priority !== undefined) {
        task.priority = newParams.priority;
      }
    }
  },

  sortTasks(sortBy = "priority", order = "asc") {
    this.tasks.sort((a, b) => {
      let compareResult;
      if (sortBy === "priority") {
        compareResult = a.priority - b.priority;
      } else if (sortBy === "id") {
        compareResult = a.id - b.id;
      } else {
        return 0;
      }
      return order === "asc" ? compareResult : -compareResult;
    });
  },
};
