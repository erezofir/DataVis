const stack = [];
const canvas = document.getElementById("stackCanvas");
const ctx = canvas.getContext("2d");
const headValue = document.getElementById("head-value");
const tailValue = document.getElementById("tail-value");
const stackInput = document.getElementById("stackInput");

function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stack.forEach((value, index) => {
    ctx.fillStyle = "#3498db";
    ctx.fillRect(30, canvas.height - (index + 1) * 50, 140, 40);
    ctx.fillStyle = "#ffffff";
    ctx.font = "16px Montserrat";
    ctx.fillText(value, 90, canvas.height - (index + 1) * 25);
  });

  // Update head and tail pointers
  headValue.textContent = stack.length > 0 ? stack[0] : "-1";
  tailValue.textContent = stack.length > 0 ? stack[stack.length - 1] : "-1";
}

function pushButton() {
  const value = stackInput.value.trim();
  if (value === "") {
    alert("Please enter a value!");
    return;
  }
  if (stack.length < 6) {
    stack.push(value);
    stackInput.value = ""; // Clear input field
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
