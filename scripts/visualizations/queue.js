const queue = [];

function enqueue(value) {
  queue.push(value);
  drawQueue();
}

function dequeue() {
  if (queue.length === 0) return;
  const dequeued = queue.shift();
  drawQueue();
  alert(`Dequeued: ${dequeued}`);
}

function clearQueue() {
    queue.length = 0;
    drawQueue();
  }
  

function drawQueue() {
    const canvas = document.getElementById('queueCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const height = canvas.height;
    const boxWidth = 60;
    const boxHeight = 30;
    const spacing = 10;
    const startX = (width - (queue.length * boxWidth + (queue.length - 1) * spacing)) / 2;
    const y = height / 2 - boxHeight / 2;
  
    for (let i = 0; i < queue.length; i++) {
      const x = startX + i * (boxWidth + spacing);
  
      // Draw box
      ctx.strokeRect(x, y, boxWidth, boxHeight);
  
      // Draw value
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(queue[i], x + boxWidth / 2, y + boxHeight / 2);
    }
  }
  
