// Stack Data Structure
const stack = [];
const maxStackSize = 10; // Maximum elements in stack

// DOM Elements
const canvas = document.getElementById("visCanvas");
const ctx = canvas.getContext("2d");

// Stack Visualization Settings
const boxWidth = 100;
const boxHeight = 40;
const startX = canvas.width / 2 - boxWidth / 2;
const startY = canvas.height - 50;

// Draw Stack
function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  stack.forEach((value, index) => {
    const x = startX;
    const y = startY - index * boxHeight;
    ctx.fillStyle = "#6c9cf3"; // Box color
    ctx.fillRect(x, y, boxWidth, boxHeight);
    ctx.strokeStyle = "#000"; // Border color
    ctx.strokeRect(x, y, boxWidth, boxHeight);
    ctx.fillStyle = "#fff"; // Text color
    ctx.font = "16px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(value, x + boxWidth / 2, y + boxHeight / 2);
  });
}

// Push operation
function push(key) {
  if (stack.length < maxStackSize) {
    stack.push(key);
    drawStack();
  } else {
    alert("Stack Overflow: Cannot add more elements.");
  }
}

// Pop operation
function pop() {
  if (stack.length > 0) {
    stack.pop();
    drawStack();
  } else {
    alert("Stack Underflow: No elements to remove.");
  }
}

// Clear All operation
function clearAll() {
  stack.length = 0;
  drawStack();
}

// Initial Draw
drawStack();

// Copy code to clipboard
function copyCode() {
  const codeElement = document.getElementById("java-code").innerText;
  navigator.clipboard
    .writeText(codeElement)
    .then(() => alert("Code copied to clipboard!"))
    .catch(() => alert("Failed to copy code."));
}

// Simulate running the code for Stack
function runCode() {
  const outputElement = document.getElementById("output");
  const simulatedOutput = `Top Element: 3
Popped Element: 3
Stack: [1, 2]`;
  outputElement.textContent = simulatedOutput;
}

