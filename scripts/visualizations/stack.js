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
  const pointerOffset = 20; // Distance between the pointer text and the rectangle

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

    // Add head pointer (on the right, pointing left)
    if (index === head) {
      ctx.fillStyle = "#3498db"; // Blue for head
      ctx.font = "16px 'Montserrat', sans-serif";
      //ctx.fillText("Head", x + rectWidth + 40, y + rectHeight / 2 + 5); // Adjusted position further right
      ctx.fillText("Head", x + rectWidth / 2, y - pointerOffset); // Adjusted to center above


      // Draw pressure line
      ctx.beginPath();
      //ctx.moveTo(x + rectWidth + 30, y + rectHeight / 2); // Line start further right
      //ctx.lineTo(x + rectWidth + 10, y + rectHeight / 2); // To the arrow base
      ctx.moveTo(x + rectWidth / 2, y - pointerOffset + 5); // Start of arrow
      ctx.lineTo(x + rectWidth / 2, y); // Line to the rectangle
      ctx.strokeStyle = "#3498db";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Arrow for head pointer (pointing left)
      ctx.beginPath();
      ctx.moveTo(x + rectWidth / 2 - 5, y); // Left of arrow tip
      ctx.lineTo(x + rectWidth / 2 + 5, y); // Right of arrow tip
      ctx.lineTo(x + rectWidth / 2, y - 5); // Top of arrow tip
      ctx.closePath();
      ctx.fillStyle = "#3498db";
      ctx.fill();
    }

    // Add tail pointer (on the left, pointing right)
    if (index === tail) {
      ctx.fillStyle = "#27ae60"; // Green for tail
      ctx.font = "16px 'Montserrat', sans-serif";
      ctx.fillText("Tail", x + rectWidth / 2, y + rectHeight + pointerOffset); // Adjusted to center below


      // Draw pressure line
      ctx.beginPath();
      ctx.moveTo(x + rectWidth / 2, y + rectHeight + pointerOffset - 5); // Start of arrow
      ctx.lineTo(x + rectWidth / 2, y + rectHeight); // Line to the rectangle
      ctx.strokeStyle = "#27ae60";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Arrow for tail pointer (pointing right)
      ctx.beginPath();
      ctx.moveTo(x + rectWidth / 2 - 5, y + rectHeight); // Left of arrow tip
      ctx.lineTo(x + rectWidth / 2 + 5, y + rectHeight); // Right of arrow tip
      ctx.lineTo(x + rectWidth / 2, y + rectHeight + 5); // Bottom of arrow tipw
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

