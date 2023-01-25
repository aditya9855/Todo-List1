const add = document.getElementById("add-task");
const delet = document.getElementById("del-btn");
const upDate = document.getElementById("update-task");
const newTask = document.getElementById("new-tasks");
const addbtn = document.getElementById("add-btn");

const delbtn = document.getElementById("del-task");
const renamebtn = document.getElementById("rename-task");

delet.addEventListener("click", ()=>{
    add.value = " "
})

addbtn.addEventListener("click",(e)=>{
    let todo = add.value
    todo = todo.trim()
    if(todo == ""){
        document.getElementById("alert") = "please add task";

    }else{
        addTodo(todo)
        add.value = " "
        updateTodo()
    }
})