const queue = [];

// Function to add a value to the queue
function enqueue(value) {
  if (value) {
    queue.push(value);
    drawQueue();
  } else {
    alert("Please enter a valid value.");
  }
}

// Function to remove a value from the queue
function dequeue() {
  if (queue.length === 0) {
    alert("Queue is empty. Cannot dequeue.");
    return;
  }
  const dequeued = queue.shift();
  drawQueue();
  alert(`Dequeued: ${dequeued}`);
}

// Function to clear the queue
function clearQueue() {
  queue.length = 0;
  drawQueue();
}

// Function to draw the queue on the canvas
function drawQueue() {
  const canvas = document.getElementById("queueCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = canvas.width;
  const height = canvas.height;
  const boxWidth = 60;
  const boxHeight = 30;
  const spacing = 10;
  const totalWidth = queue.length * boxWidth + (queue.length - 1) * spacing;
  const startX = (width + totalWidth) / 2 - boxWidth; // Start drawing from the right
  const y = height / 2 - boxHeight / 2;

  for (let i = 0; i < queue.length; i++) {
    const x = startX - i * (boxWidth + spacing); // Reverse the direction of drawing

    // Draw box
    ctx.fillStyle = "#6c9cf3";
    ctx.fillRect(x, y, boxWidth, boxHeight);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(x, y, boxWidth, boxHeight);

    // Draw value
    ctx.fillStyle = "#fff";
    ctx.font = "16px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(queue[i], x + boxWidth / 2, y + boxHeight / 2);
  }
}

// Initial draw
drawQueue();
