const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

const stack = [];
const boxWidth = 200;
const boxHeight = 30;
const startX = 200;
const startY = 350;

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stack.length; i++) {
    const y = startY - i * boxHeight;
    ctx.fillStyle = "#00ffcc";
    ctx.fillRect(startX, y, boxWidth, boxHeight);
    ctx.strokeRect(startX, y, boxWidth, boxHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(stack[i], startX + boxWidth / 2 - 10, y + boxHeight / 2 + 5);
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
    alert("The stack is empty!");
  }
}

function peekItem() {
  if (stack.length > 0) {
    alert(`Top of the stack: ${stack[stack.length - 1]}`);
  } else {
    alert("The stack is empty!");
  }
}

drawStack();
