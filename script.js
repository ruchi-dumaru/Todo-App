let input=document.querySelector("#task");
let btn=document.querySelector("#addTask");
let ul=document.querySelector("#taskList");

window.addEventListener("load",()=>{
  let saved=localStorage.getItem("tasks");
  if(saved){
    ul.innerHTML=saved;
  }
})

function saveTasks(){
  localStorage.setItem("tasks",ul.innerHTML);
}


btn.addEventListener("click",()=>{
  
if(input.value==="") return ;

let li = document.createElement("li");
li.textContent=input.value + " ";


let action=document.createElement("div");
action.classList.add("action");

let editBtn=document. createElement("button");
editBtn.textContent="Edit";
editBtn.classList.add("edit");


let delBtn=document.createElement("button");
delBtn.textContent="delete";
delBtn.classList.add("delete");

let checkedBtn=document.createElement("button");
checkedBtn.textContent="comp";
checkedBtn.classList.add("checked");

editBtn.addEventListener("click",()=>{
let newTask=prompt("Edit yout Task:",li.firstChild.textContent);
if(newTask!==null && newTask.trim()!==""){
  li.firstChild.textContent=newTask + "";
}
})

checkedBtn.addEventListener("click",()=>{
  li.classList.toggle("completed");
})

delBtn.addEventListener("click",()=>{
 li.remove();
})

li.appendChild(editBtn);
li.appendChild(checkedBtn);
li.appendChild(delBtn);

ul.appendChild(li);

input.value="";

saveTasks();

})
