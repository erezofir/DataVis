const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");
const stack = [];

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stack.length; i++) {
    const y = canvas.height - (i + 1) * 30 - 10;
    ctx.fillStyle = "#3498db";
    ctx.fillRect(200, y, 100, 30);
    ctx.strokeRect(200, y, 100, 30);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(stack[i], 240, y + 20);
  }
}

function pushItem() {
  const value = prompt("Enter a value:");
  if (value) {
    stack.push(value);
    drawStack();
  }
}

function popItem() {
  stack.pop();
  drawStack();
}

function peekItem() {
  if (stack.length > 0) {
    alert(`Top Element: ${stack[stack.length - 1]}`);
  } else {
    alert("Stack is empty");
  }
}

function clearAll() {
  stack.length = 0;
  drawStack();
}

drawStack();
