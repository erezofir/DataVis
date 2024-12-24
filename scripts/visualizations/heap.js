const heap = [];

function insertItem(value) {
  heap.push(value);
  heapifyUp(heap.length - 1);
  drawHeap();
}

function extractItem() {
  if (heap.length === 0) return;
  const extracted = heap[0];
  heap[0] = heap.pop();
  heapifyDown(0);
  drawHeap();
  alert(`Extracted: ${extracted}`);
}

function heapifyUp(index) {
  const parent = Math.floor((index - 1) / 2);
  if (parent >= 0 && heap[parent] > heap[index]) {
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    heapifyUp(parent);
  }
}

function heapifyDown(index) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let smallest = index;

  if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
  if (right < heap.length && heap[right] < heap[smallest]) smallest = right;

  if (smallest !== index) {
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    heapifyDown(smallest);
  }
}


function drawHeap() {
    const canvas = document.getElementById('heapCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const height = canvas.height;
    const radius = 20; // Node radius
    const levelHeight = 50; // Vertical spacing between levels
  
    function drawNode(value, x, y) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#98d5f2';
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(value, x, y);
    }
  
    function drawTree(index, x, y, offset) {
      if (index >= heap.length) return;
  
      drawNode(heap[index], x, y);
  
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
  
      if (leftIndex < heap.length) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - offset, y + levelHeight);
        ctx.stroke();
        drawTree(leftIndex, x - offset, y + levelHeight, offset / 2);
      }
  
      if (rightIndex < heap.length) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + offset, y + levelHeight);
        ctx.stroke();
        drawTree(rightIndex, x + offset, y + levelHeight, offset / 2);
      }
    }
  
    drawTree(0, width / 2, 50, width / 4);
  }
  