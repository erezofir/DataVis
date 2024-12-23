const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

// Stack initialization
let stack = ["empty"];
let head = -1; // Top pointer
let tail = -1; // Bottom pointer

// Draw the stack
function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rectWidth = 100;
  const rectHeight = 40;

  stack.forEach((item, index) => {
    const x = canvas.width / 2 - rectWidth / 2; // Center horizontally
    const y = canvas.height - (index + 1) * 50; // Position elements vertically

    ctx.fillStyle = "#d0ebff"; // Light blue background
    ctx.fillRect(x, y, rectWidth, rectHeight);
    ctx.strokeRect(x, y, rectWidth, rectHeight);

    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "16px Arial";
    ctx.fillText(item, x + rectWidth / 2, y + rectHeight / 2 + 5);

    if (index === head) {
      ctx.fillStyle = "green";
      ctx.fillText("Head", x + rectWidth + 20, y + rectHeight / 2 + 5);
    }
    if (index === tail) {
      ctx.fillStyle = "red";
      ctx.fillText("Tail", x - 40, y + rectHeight / 2 + 5);
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

// Initialize visualization
drawStack();
