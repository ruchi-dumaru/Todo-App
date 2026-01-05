let inputTask = document.querySelector("#task");
let addTaskBtn = document.querySelector("#addTask");
let ul = document.querySelector("#taskList");

document.addEventListener("DOMContentLoaded",()=>{
  const storedTasks= JSON.parse(localStorage.getItem('tasks'))

  if(storedTasks){
    storedTasks.forEach((task)=>tasks.push(task))
    updateTask();
   
  }
})
let tasks = [];

const saveTasks=()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
}
const addTask = () => {
  const text = inputTask.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    inputTask.value = "";
    updateTask();
    saveTasks();
  }
  console.log(tasks);
};

const toggleTaskComplete=(index)=>{
   tasks[index].completed=!tasks[index].completed;
   console.log(tasks);
   updateTask();
    saveTasks();
}

const deleteTask=(index)=>{
  tasks.splice(index,1);
  updateTask();
   saveTasks();
}

const editTask=(index)=>{
  inputTask.value=tasks[index].text;
  tasks.splice(index,1);
  updateTask();
   saveTasks();
}

const updateTask = () => {
  ul.textContent = "";
  tasks.forEach((val,index) => {
    const li = document.createElement("li");
    li.classList.add("li");
    li.innerHTML = `
 <div class="taskItem">
          <div class="task ${val.completed?'completed':''}">
            <input type="checkbox" class="checkbox" ${val.completed ?"checked":""}>
            <p>${val.text}</p>
          </div>
          <div class="icons">
            <i class="fa-solid fa-pencil" onClick="editTask(${index})"></i>
<i class="fa-solid fa-trash" onClick="deleteTask(${index})"></i>

          </div>
        </div>
 `; 

    li.addEventListener("change",()=>toggleTaskComplete(index))
   
    ul.appendChild(li);
  });
};
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
