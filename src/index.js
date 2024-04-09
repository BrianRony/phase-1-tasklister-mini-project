document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e)=> {
    e.preventDefault()
    buildTask(e.target.new_task_description.value);
    form.reset();
  })
});
function buildTask(task){
  let list = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDel);
  btn.textContent = "X";
  list.textContent = `${task}  `
  list.appendChild (btn)
  document.querySelector("#tasks").appendChild(list)
}

function handleDel(e){
  e.target.parentNode.remove();
}
