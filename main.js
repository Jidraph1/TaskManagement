// OOP programming.........................


// class Task {
//     constructor(title, description, date) {
//       this.title = title;
//       this.description = description;
//       this.date = date;
//       this.completed = false;
//     }
//   }
  
//   class Completed {
//     constructor() {
//       this.tasks = [];
//       this.incompleteTasks = document.querySelector("#incomplete-tasks");
//       this.completedTasks = document.querySelector("#completed-tasks");
//       this.lateTasks = document.querySelector("#late-tasks");
//       this.divDeleteAll = document.querySelector(".delete-all");
//       this.deleteAllBtn = document.querySelector("#delete-all-btn");
//     }
  
//     addTask(title, description, date) {
//       const task = new Task(title, description, date);
//       this.tasks.push(task);
//       this.displayTasks();
//     }
  
//     updateTask(taskIndex) {
//       const task = this.tasks[taskIndex];
//       this.displayAddTaskForm();
//       document.querySelector("#title").value = task.title;
//       document.querySelector("#description").value = task.description;
//       document.querySelector("#date").value = task.date;
//       this.tasks.splice(taskIndex, 1);
//       this.displayTasks();
//     }
  
//     deleteTask(taskIndex) {
    
//         this.tasks.splice(taskIndex, 1);
//         this.displayTasks();
//       }
  
//     markAsCompleted(taskIndex) {
//       this.tasks[taskIndex].completed = true;
//       this.displayTasks();
//     }
  
//     displayAddTaskForm() {
//     }
  
//     createButton(text, onClick) {
//       const button = document.createElement("button");
//       button.innerHTML = text;
//       button.onclick = onClick;
//       return button;
//     }
  
//     createTaskElement(task, index) {
//       const taskItem = document.createElement("li");
//       taskItem.innerHTML = `
//         <h3>${task.title}</h3>
//         <p>${task.description}</p>
//         <p>Expected Completion Date: ${task.date}</p>
//       `;
  
//       const updateBtn = this.createButton("Update", () => this.updateTask(index));
//       taskItem.appendChild(updateBtn);
  
//       const deleteBtn = this.createButton("Delete", () => this.deleteTask(index));
//       taskItem.appendChild(deleteBtn);
  
//       const completeBtn = this.createButton(
//         task.completed ? `<strike>Completed</strike>` : "Mark as completed",
//         () => this.markAsCompleted(index)
//       );
//       taskItem.appendChild(completeBtn);
  
//       return taskItem;
//     }
  
//     displayTasks() {
//       this.incompleteTasks.innerHTML = "";
//       this.completedTasks.innerHTML = "";
//       this.lateTasks.innerHTML = "";
  
//       for (let i = 0; i < this.tasks.length; i++) {
//         const task = this.tasks[i];
//         const taskItem = this.createTaskElement(task, i);
  
//         if (task.completed) {
//           this.completedTasks.appendChild(taskItem);
//         } else {
//           if (task.date < new Date().toISOString().slice(0, 10)) {
//             this.lateTasks.appendChild(taskItem);
//           } else {
//             this.incompleteTasks.appendChild(taskItem);
//           }
//         }
//       }
  
//       if (this.incompleteTasks.children.length === 0) {
//         this.incompleteTasks.innerHTML = "<p>No Incomplete Tasks</p>";
//       }
  
//       if (this.completedTasks.children.length === 0) {
//         this.completedTasks.innerHTML = "<p>No Completed Tasks</p>";
//       }
  
//       if (this.lateTasks.children.length === 0) {
//         this.lateTasks.innerHTML = "<p>No Late Tasks</p>";
//       }
  
//       this.tasks.length === 0 ? this.divDeleteAll.classList.add("hidden") : this.divDeleteAll.classList.remove("hidden");
//     }
//   }
  
//   const addTaskForm = document.querySelector("#add-task-form");
//   const divTaskForm = document.querySelector(".task-form");
//   const deleteAllBtn = document.querySelector("#delete-all-btn");
  
//   const completed = new Completed();
  
//   function addTask(event) {
//     event.preventDefault();
//     const title = document.querySelector("#title");
//     const description = document.querySelector("#description");
//     const date = document.querySelector("#date");
//     completed.addTask(title.value, description.value, date.value);
//     addTaskForm.reset();
//   }
  
//   function deleteAll() {
//       completed.tasks = [];
//       completed.displayTasks();
//   }
  
//   deleteAllBtn.addEventListener("click", deleteAll);
  
//   addTaskForm.addEventListener("submit", addTask);
  
//   completed.displayTasks();
