const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

// Stack initialization
let stack = ["empty"];
let head = 0; // Initial top pointer
let tail = 0; // Initial bottom pointer

// Draw the stack
function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rectWidth = 100;
  const rectHeight = 40;

  stack.forEach((item, index) => {
    const x = canvas.width / 2 - rectWidth / 2; // Center horizontally
    const y = canvas.height - (index + 1) * 50; // Position elements vertically

    // Draw rectangle
    ctx.fillStyle = "#d0ebff"; // Light blue background
    ctx.fillRect(x, y, rectWidth, rectHeight);
    ctx.strokeRect(x, y, rectWidth, rectHeight);

    // Add text (cell content)
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "16px 'Montserrat', sans-serif"; // Font for "empty"
    ctx.fillText(item, x + rectWidth / 2, y + rectHeight / 2 + 5);

    // Add head pointer (on the right, pointing inward)
    if (index === head) {
      ctx.fillStyle = "#3498db"; // Blue for head
      ctx.font = "16px 'Montserrat', sans-serif";
      ctx.fillText("Head", x + rectWidth + 50, y + rectHeight / 2 + 5); // Move further to the right

      // Arrow for head pointer
      ctx.beginPath();
      ctx.moveTo(x + rectWidth + 20, y + rectHeight / 2); // Start at the far right of the arrow
      ctx.lineTo(x + rectWidth + 10, y + rectHeight / 2 - 5); // Pointing inward to the cell
      ctx.lineTo(x + rectWidth + 10, y + rectHeight / 2 + 5);
      ctx.closePath();
      ctx.fillStyle = "#3498db";
      ctx.fill();
    }

    // Add tail pointer (on the left, pointing inward)
    if (index === tail) {
      ctx.fillStyle = "#27ae60"; // Green for tail
      ctx.font = "16px 'Montserrat', sans-serif";
      ctx.fillText("Tail", x - 60, y + rectHeight / 2 + 5); // Adjust further to the left

      // Arrow for tail pointer
      ctx.beginPath();
      ctx.moveTo(x - 20, y + rectHeight / 2); // Start further left
      ctx.lineTo(x - 10, y + rectHeight / 2 - 5); // Pointing inward to the cell
      ctx.lineTo(x - 10, y + rectHeight / 2 + 5);
      ctx.closePath();
      ctx.fillStyle = "#27ae60";
      ctx.fill();
    }
  });
}




// Push operation
function pushItem() {
  const value = prompt("Enter a value:");
  if (!value) return;

  if (stack[0] === "empty") {
    stack[0] = value;
    head = 0;
    tail = 0;
  } else {
    stack.push(value);
    head = stack.length - 1;
  }

  drawStack();
}

// Pop operation
function popItem() {
  if (stack.length === 1 && stack[0] === "empty") {
    alert("Stack is empty!");
    return;
  }

  stack.pop();
  head = stack.length - 1;

  if (stack.length === 0) {
    stack = ["empty"];
    head = 0;
    tail = 0;
  }

  drawStack();
}

// Clear All operation
function clearAll() {
  stack = ["empty"];
  head = 0;
  tail = 0;
  drawStack();
}

// Initialize visualization
drawStack();
