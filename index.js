function trail(todos) {
  var parent = document.getElementById("output");
  if (parent) {
    for (i = 0; i < todos.length; i++) {
      var child = document.createElement("div");

      var grandChild1 = document.createElement("span");
      grandChild1.innerHTML = todos[i].name;

      var grandChild2 = document.createElement("span");
      grandChild2.innerHTML = todos[i].age;

      var grandChild3 = document.createElement("span");
      grandChild3.innerHTML = todos[i].school;

      child.appendChild(grandChild1);
      child.appendChild(grandChild2);
      child.appendChild(grandChild3);

      parent.appendChild(child);
    }
  } else {
    console.log("error");
  }
}

var todos = [
  {
    name: "sanju",
    age: 23,
    school: "kv",
  },
  {
    name: "nidhin",
    age: 23,
    school: "vikam",
  },
];
trail(todos);
