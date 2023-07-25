// USING OOP............................

// class Task {
//     constructor(title, description, date) {
//       this.title = title;
//       this.description = description;
//       this.date = date;
//       this.complete = false;
//     }
  
//     markAsCompleted() {
//       this.complete = true;
//     }
  
//     displayTaskItem() {
//       return `
//         <h3>${this.title}</h3>
//         <p>${this.description}</p>
//         <p>Expected Completion Date: ${this.date}</p>
//       `;
//     }
//   }

// class Completed 
//   constructor() {
//     this.tasks = [];
//     this.incompleteTasks = document.querySelector("#incomplete-tasks");
//     this.completedTasks = document.querySelector("#completed-tasks");
//     this.lateTasks = document.querySelector("#late-tasks");
//     this.divDeleteAll = document.querySelector(".delete-all");
//     this.deleteAllBtn = document.querySelector("#delete-all-btn");
//   }

// STRUCTURAL WITHOUT OOP...........................

const addTaskForm = document.querySelector("#add-task-form")
const incompleteTasks = document.querySelector("#incomplete-tasks")
const completedTasks = document.querySelector("#completed-tasks")
const lateTasks = document.querySelector("#late-tasks")
const divTaskForm = document.querySelector(".task-form")
const divDeleteAll = document.querySelector(".delete-all")
const deleteAllBtn = document.querySelector("#delete-all-btn")

let tasks = []

// Add task function
function addTask(event) {
  event.preventDefault()

  // Get task data from the form
  const title = document.querySelector("#title")
  const description = document.querySelector("#description")
  const date = document.querySelector("#date")

  // Create task object with a default of completed: false
  const task = {
    title: title.value,
    description: description.value,
    date: date.value,
    completed: false
  }
  
  tasks.push(task)

  addTaskForm.reset()

  displayTasks()
}

function displayAddTaskForm(){
}


function updateTask(taskIndex) {
  displayAddTaskForm()

  document.querySelector("#title").value = tasks[taskIndex].title
  document.querySelector("#description").value = tasks[taskIndex].description
  document.querySelector("#date").value = tasks[taskIndex].date

  displayTasks()
}

function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1)
    displayTasks()
  }


function deleteAll() {
    tasks = []
    displayTasks()
  }

deleteAllBtn.addEventListener("click", deleteAll)

function markAsCompleted(taskIndex) {
  tasks[taskIndex].completed = true
  displayTasks()
}

function displayTasks() {
  incompleteTasks.innerHTML = ""
  completedTasks.innerHTML = ""
  lateTasks.innerHTML = ""

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i]

    // Create the task list item
    const taskItem = document.createElement("li")
    taskItem.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <p>Expected Completion Date: ${task.date}</p>
    `

    // Create update button
    const updateBtn = document.createElement("button")
    updateBtn.innerHTML = "Update"
    updateBtn.onclick = () => updateTask(i)
    taskItem.appendChild(updateBtn)

    // Create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.onclick = () => deleteTask(i)
    taskItem.appendChild(deleteBtn)

    // Create markAsComplete button
    const completeBtn = document.createElement("button")
    task.completed ? completeBtn.innerHTML = `<strike>Completed</strike>` : completeBtn.innerHTML = "Mark as completed"
    completeBtn.onclick = () => markAsCompleted(i)
    taskItem.appendChild(completeBtn)

    // Append the task item to the appropriate section
    if (task.completed === false) {
      if (task.date < new Date().toISOString().slice(0, 10)) {
        lateTasks.appendChild(taskItem)
      } else {
        incompleteTasks.appendChild(taskItem)
      }
    } else {
      completedTasks.appendChild(taskItem)
    }
  }

}

addTaskForm.addEventListener("submit", addTask)

// Display the tasks when the page loads
displayTasks()


