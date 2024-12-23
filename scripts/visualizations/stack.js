const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

// Stack implementation
let stack = ["empty"];
let head = -1; // Indicates the top of the stack
let tail = -1; // Tracks the last inserted element

// Draw the stack
function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through the stack array to draw each element
  stack.forEach((item, index) => {
    const y = canvas.height - (index + 1) * 50 - 10; // Dynamic Y position
    ctx.fillStyle = "#d0ebff"; // Background color
    ctx.fillRect(200, y, 100, 40); // Rectangle for stack item
    ctx.strokeRect(200, y, 100, 40); // Border
    ctx.fillStyle = "#000"; // Text color
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(item, 250, y + 25); // Display the element value

    // Display the head and tail pointers
    if (index === head) {
      ctx.fillStyle = "#ff0000";
      ctx.fillText("Head", 320, y + 25);
    }
    if (index === tail) {
      ctx.fillStyle = "#00ff00";
      ctx.fillText("Tail", 150, y + 25);
    }
  });
}

// Push operation
function pushItem() {
  const value = prompt("Enter value to push:");
  if (value === null || value.trim() === "") return; // Cancelled or empty input

  if (stack[0] === "empty") {
    stack[0] = value; // Replace "empty" with the first element
    head = 0;
    tail = 0;
  } else {
    stack.push(value); // Add value to the stack
    head = stack.length - 1; // Update the head pointer
    tail = stack.length - 1; // Tail matches the head for this operation
  }

  drawStack();
}

// Pop operation
function popItem() {
  if (stack.length === 0 || (stack.length === 1 && stack[0] === "empty")) {
    alert("Stack is empty!");
    return;
  }

  stack.pop(); // Remove the last element
  head = stack.length - 1; // Update the head pointer

  if (stack.length === 0) {
    stack = ["empty"]; // Reset to initial state
    head = -1;
    tail = -1;
  }

  drawStack();
}

// Clear All operation
function clearAll() {
  stack = ["empty"];
  head = -1;
  tail = -1;
  drawStack();
}

// Initialize the stack visualization
drawStack();
