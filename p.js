let todoInput=document.querySelector("#todoInput");

let addTask=document.querySelector("#addTask");
let taskList=document.querySelector("#taskList");

let arrTasks=[];

const saveTask=localStorage.getItem("tasks");
if(saveTask){
  arrTasks=JSON.parse(saveTask);
  showTasks();
}

addTask.addEventListener("click",()=>{
  let input=todoInput.value;
  if(input==="") return;

  arrTasks.push(input);
  todoInput.value="";
  saveTasks()
  showTasks();
})

function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(arrTasks));
}
function showTasks(){
  taskList.innerHTML="";
  for(let i=0;i<arrTasks.length;i++){
    let li=document.createElement("li");
    li.textContent=arrTasks[i];

    let delBtn=document.createElement("button");
    delBtn.textContent='delete';
    delBtn.setAttribute("arrIndex",i)

    delBtn.addEventListener("click",function(){
      let index=parseInt(this.getAttribute("arrIndex"));
      arrTasks.splice(index,1);
      saveTasks()
      showTasks();
    })

    let  editBtn=document.createElement("button");
      editBtn.textContent="edit";
      editBtn.setAttribute("arrIndex",i);
      editBtn.addEventListener("click",function (){
        let index=parseInt(this.getAttribute("arrIndex"));
        let newTask=prompt("enter the task:",arrTasks[index]);
        if(newTask){
          arrTasks[i]=newTask;
          saveTasks();
          showTasks();
        }
      })
    li.appendChild(delBtn);
     li.appendChild(editBtn);
    taskList.appendChild(li);
  }
  
}