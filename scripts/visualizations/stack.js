const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");
const stack = ["empty"]; // Initial empty element
let head = 0;

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stack.forEach((val, i) => {
    const y = canvas.height - (i + 1) * 30 - 10;
    ctx.fillStyle = "#3498db";
    ctx.fillRect(200, y, 100, 30);
    ctx.strokeRect(200, y, 100, 30);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(val, 240, y + 20);
    if (i === head) ctx.fillText("Head", 310, y + 20);
  });
}

function pushItem() {
  const value = prompt("Enter a value:");
  if (value) {
    stack.push(value);
    head = stack.length - 1;
    drawStack();
  }
}

function popItem() {
  if (stack.length > 1) {
    stack.pop();
    head = stack.length - 1;
    drawStack();
  }
}

function clearAll() {
  stack.length = 1;
  stack[0] = "empty";
  head = 0;
  drawStack();
}

drawStack();
