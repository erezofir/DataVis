// Select the canvas and initialize variables
const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

const stack = [];
const maxStackSize = 10;
let headIndex = -1;
let tailIndex = -1;

// Draw the stack
function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cellHeight = canvas.height / 16;
  const cellWidth = canvas.width / 4;
  const baseX = canvas.width / 2 - cellWidth / 2;
  let y = canvas.height - cellHeight - 10;

  for (let i = 0; i < stack.length; i++) {
    ctx.strokeStyle = "#000";
    ctx.strokeRect(baseX, y, cellWidth, cellHeight);
    ctx.font = "12px Arial";
    ctx.fillText(stack[i], baseX + cellWidth / 2 , y + cellHeight / 2 + 4);

    if (i === headIndex) {
      drawPointer(baseX - 30, y + cellHeight / 2, "HEAD");
    }
    if (i === tailIndex) {
      drawPointer(baseX + cellWidth + 10, y + cellHeight / 2, "TAIL");
    }

    y -= cellHeight + 5;
  }
}

function updatePointers() {
  document.getElementById("head-value").textContent = headIndex !== -1 ? headIndex : "EMPTY";
  document.getElementById("tail-value").textContent = tailIndex !== -1 ? tailIndex : "EMPTY";
}


// Stack operations
window.pushButton = function () {
  if (stack.length < maxStackSize) {
    const value = prompt("Enter value to push:");
    if (value) {
      stack.push(value);
      tailIndex = stack.length - 1;
      if (headIndex === -1) headIndex = 0;
      drawStack();
      updatePointers();
    }
  } else {
    alert("Stack overflow!");
  }
};

window.popButton = function () {
  if (stack.length > 0) {
    stack.pop();
    tailIndex = stack.length - 1;
    if (stack.length === 0) {
      headIndex = -1;
      tailIndex = -1;
    }
    drawStack();
    updatePointers();
  } else {
    alert("Stack underflow!");
  }
};

window.clearButton = function () {
  stack.length = 0;
  headIndex = -1;
  tailIndex = -1;
  drawStack();
  pdatePointers();
};

// Initial draw
drawStack();
