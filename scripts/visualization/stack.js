const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");

const stack = [];
const boxWidth = 100;
const boxHeight = 30;
const startX = canvas.width / 2 - boxWidth / 2;
let headIndex = 0;

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stack.length; i++) {
    const y = canvas.height - (i + 1) * boxHeight - 10;
    ctx.fillStyle = "#3498db";
    ctx.fillRect(startX, y, boxWidth, boxHeight);
    ctx.strokeRect(startX, y, boxWidth, boxHeight);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(stack[i], startX + boxWidth / 2 - 10, y + boxHeight / 2 + 5);
  }

  if (stack.length > 0) {
    ctx.fillStyle = "#e74c3c";
    ctx.fillText(`Head: ${stack[stack.length - 1]}`, startX + boxWidth + 20, canvas.height - stack.length * boxHeight - 10);
  }
}

function pushItem() {
  const value = prompt("Enter a value to push:");
  if (value) {
    stack.push(value);
    headIndex = stack.length - 1;
    drawStack();
  }
}

function popItem() {
  if (stack.length > 0) {
    alert(`Popped: ${stack.pop()}`);
    headIndex = stack.length - 1;
    drawStack();
  } else {
    alert("The stack is empty!");
  }
}

drawStack();
