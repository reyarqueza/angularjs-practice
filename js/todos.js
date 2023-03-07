angular.module("todosApp", []).controller("TodosAppController", function () {
  let todos = this;

  todos.textField = "";

  todos.list = [
    {
      id: Math.random().toString(),
      task: "Buy Gas",
      isDone: false,
    },
  ];

  todos.addTask = function (task) {
    todos.list.push({
      id: Math.random().toString(),
      task,
      isDone: false,
    });
    todos.textField = "";
  };

  todos.taskDone = function (id, done) {
    console.log(`${id} ${done}`);
    console.log(todos);

    if (todos && todos.list && todos.list) {
      todos.list.find((item) => item.id == id).isDone = done;
    }
  };
});
