const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// FORM SUBMISSION
form.addEventListener("submit", function (event) {
    event.preventDefault();  // Stop page from reloading

    const task = input.value.trim();  // Get what user typed

    // Don't add empty tasks
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create HTML for the new task
    const todoHTML = `
      <div class="todo-item">
        <span class="todo-text">${task}</span>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Add it to the page
    todoList.innerHTML += todoHTML;

    // Clear the input for next task
    input.value = "";
    input.focus();
});

// EVENT DELEGATION - One listener for ALL delete buttons
todoList.addEventListener("click", function (event) {
    // Check if DELETE button was clicked
    if (event.target.classList.contains("delete-btn")) {
        // Remove the entire todo item
        event.target.parentElement.remove();
    }

    // Check if todo text was clicked (mark as done)
    if (event.target.classList.contains("todo-text")) {
        event.target.classList.toggle("done");
    }
});