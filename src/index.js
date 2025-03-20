document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Handle form submission
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page refresh
  
      // Get the user input
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();
  
      if (taskText === "") return; // Ignore empty inputs
  
      // Create a new task element
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      // Append the task to the list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      taskInput.value = "";
    });
  });
  const taskItem = document.createElement("li");
taskItem.textContent = taskText;

// Create a delete button
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";
deleteButton.addEventListener("click", () => taskItem.remove());

// Append delete button to task
taskItem.appendChild(deleteButton);
taskList.appendChild(taskItem);
const prioritySelect = document.getElementById("priority");
const priority = prioritySelect.value;

if (priority === "high") taskItem.style.color = "red";
if (priority === "medium") taskItem.style.color = "orange";
if (priority === "low") taskItem.style.color = "green";

const dueDate = document.getElementById("due-date").value;
taskItem.textContent = `${taskText} (Due: ${dueDate})`;

  