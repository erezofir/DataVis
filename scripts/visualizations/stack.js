const stack = [];
const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");
const headValue = document.getElementById("head-value");
const tailValue = document.getElementById("tail-value");

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stack.forEach((element, index) => {
    ctx.fillStyle = "#3498db";
    ctx.fillRect(10 + index * 50, 20, 40, 100);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(element, 25 + index * 50, 70);
  });

  // Update head and tail pointers
  headValue.textContent = stack.length > 0 ? stack[0] : "-1";
  tailValue.textContent = stack.length > 0 ? stack[stack.length - 1] : "-1";
}

function pushButton() {
  const value = Math.floor(Math.random() * 100);
  if (stack.length < 10) {
    stack.push(value);
    drawStack();
  } else {
    alert("Stack is full!");
  }
}

function popButton() {
  if (stack.length > 0) {
    stack.pop();
    drawStack();
  } else {
    alert("Stack is empty!");
  }
}

function clearButton() {
  stack.length = 0;
  drawStack();
}

// Initialize canvas
drawStack();
