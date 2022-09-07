const todoList = document.getElementById("todo-list");
const addTodoBtn = document.getElementById("add-todo");
const popUp = document.getElementById("popup-edit-box");
let inputEdit = document.getElementById("input-edit");
const editButton = document.getElementById("edit-btn");
const cancelEditButton = document.getElementById("cancel-edit");
let anotherElement;
let textElement;

cancelEditButton.addEventListener("click", () => {
  popUp.style.display = "none";
});
addTodoBtn.addEventListener("click", addTodo);
editButton.addEventListener("click", editTodoValue);

function addTodo(e) {
  e.preventDefault();
  let inputFormValue = document.getElementById("input-form-add");
  if (inputFormValue.value.length === 0) {
    alert("you can't add empty todo :) ");
  } else {
    todoList.innerHTML += todoPattern(inputFormValue.value);
    inputFormValue.value = "";
  }
}

function todoPattern(value) {
  return `<li class="li-todo">
    ${value} 
      <img
        src="https://cdn.pixabay.com/photo/2012/04/13/00/21/button-31222_960_720.png"
        alt="delete todo "
        class="delete-img float-end"
        onclick="removeTodo()"
      />
           <img
        src="https://cdn.pixabay.com/photo/2013/10/04/11/48/pencil-190586_960_720.png"
        alt="Edit todo logo "
        class="edit-img float-end"
        onclick="editTodo()"
      />
</li>

`;
}

function editTodo() {
  inputEdit.value = event.currentTarget.parentElement.innerText;
  popUp.style.display = "block";
  anotherElement = event.currentTarget.parentElement;
  textElement = event.currentTarget.parentElement.innerText;
}

function removeTodo() {
  event.currentTarget.parentElement.remove();
}

function editTodoValue() {
  if (inputEdit.value === "") {
    alert(`You can't enter empty value`);
  } else {
    anotherElement.innerHTML = `
    ${inputEdit.value} 
      <img
        src="https://cdn.pixabay.com/photo/2012/04/13/00/21/button-31222_960_720.png"
        alt="delete todo "
        class="delete-img float-end"
        onclick="removeTodo()"
      />
           <img
        src="https://cdn.pixabay.com/photo/2013/10/04/11/48/pencil-190586_960_720.png"
        alt="Edit todo logo "
        class="edit-img float-end"
        onclick="editTodo()"
      />


`;
    popUp.style.display = "none";
  }
}
