const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".list");
const newTaskInput = document.querySelector("#new-task");
const clearListBtn = document.querySelector(".clear-list-btn");


addTaskBtn.addEventListener("click", () => {   
    
    let newTaskText = newTaskInput.value;
    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `<p>${newTaskText}</p>` + '<button class = "complete-btn">Mark Complete</button>'; 
    taskList.appendChild(newTaskItem);
    newTaskItem.classList.add("task")
    newTaskItem.style.listStyleType = "none";
    newTaskInput.value = "";
    const markCompleteBtnList = document.querySelectorAll(".complete-btn");
    let markCompleteBtnArray = Array.from(markCompleteBtnList);
    for (const button of markCompleteBtnArray){
        button.addEventListener("click", () => {
            button.previousSibling.style.setProperty("text-decoration", "line-through");
        })
    };
});

clearListBtn.addEventListener("click", () => { 

    let taskItemList = document.querySelectorAll(".task");
    for (let i = 0; i < taskItemList.length; i++) { 
        taskItemList[i].parentNode.removeChild(taskItemList[i]);
    }

})

//problem: when you click a mark-complete button, it strikes out the button as well as the text.
//Would rather it only struck out the text.









