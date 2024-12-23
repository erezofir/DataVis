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
  const value = prompt("Enter a value to push:");
  if (value) {
    stack.push(value);
    drawStack();
  }
}

function popItem() {
  if (stack.length > 0) {
    alert(`Popped: ${stack.pop()}`);
    drawStack();
  } else {
    alert("The stack is empty!");
  }
}

function peekItem() {
  if (stack.length > 0) {
    alert(`Top: ${stack[stack.length - 1]}`);
  } else {
    alert("The stack is empty!");
  }
}

drawStack();
