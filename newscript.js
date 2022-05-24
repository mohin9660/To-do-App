
const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const items = document.querySelector("#items");
const completeUL = document.querySelector(".complete-list ul");


const createTask = (task) => {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");

    label.innerText = task;
    checkBox.type = "checkbox";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem
}

const addTask = (e) => {
    e.preventDefault();
    const listItem = createTask(newTask.value);
    items.appendChild(listItem);
    newTask.value = ""

    // bind the new list item to the incomplete item
    bindInCompleteItem(listItem, completeTask);
};

const completeTask = function()  {
    const listItem = this.parentNode;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    listItem.appendChild(deleteBtn);

    const checkBox = listItem.querySelector("input[type='checkbox']");
    checkBox.remove();
    completeUL.appendChild(listItem);
    bindCompleteItem(listItem, deleteTask);

};

const deleteTask = function() {
    const listItem = this.parentNode;
    const ul = listItem.parentNode;

    ul.removeChild(listItem);
};

const bindInCompleteItem = (taskItem, checkboxClick) => {
    const checkBox = taskItem.querySelector("input[type='checkbox']");

    checkBox.onchange = checkboxClick;
};


const bindCompleteItem = (taskItem, deleteButtonClick) => {
    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.onclick = deleteButtonClick;
};


for(let i=0; i< items.children.length; i++){
    bindInCompleteItem(items.children[i], completeTask)
}

for(let i=0; i< completeUL.children.length; i++){
    bindCompleteItem(completeUL.children[i], deleteTask)
}
form.addEventListener("submit", addTask)


