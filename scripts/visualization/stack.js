const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");
let stack = [];

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stack.length; i++) {
    ctx.fillStyle = "#00ffcc";
    ctx.fillRect(200, 400 - i * 30, 200, 20);
    ctx.strokeRect(200, 400 - i * 30, 200, 20);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(stack[i], 300, 415 - i * 30);
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
    stack.pop();
    drawStack();
  } else {
    alert("Stack is empty!");
  }
}

function peekItem() {
  if (stack.length > 0) {
    alert(`Top of stack: ${stack[stack.length - 1]}`);
  } else {
    alert("Stack is empty!");
  }
}

drawStack();
