const array = [];

function addItem(value) {
  array.push(value);
  drawArray();
}

function removeItem(index) {
  if (index < 0 || index >= array.length) return;
  array.splice(index, 1);
  drawArray();
}

function searchItem(value) {
    const index = array.indexOf(value);
    if (index !== -1) {
      alert(`Item found at index: ${index}`);
    } else {
      alert('Item not found.');
    }
  }
  

function drawArray() {
    const canvas = document.getElementById('arrayCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const height = canvas.height;
    const boxWidth = 60;
    const boxHeight = 30;
    const spacing = 10;
    const startX = (width - (array.length * boxWidth + (array.length - 1) * spacing)) / 2;
    const y = height / 2 - boxHeight / 2;
  
    for (let i = 0; i < array.length; i++) {
      const x = startX + i * (boxWidth + spacing);
  
      // Draw box
      ctx.strokeRect(x, y, boxWidth, boxHeight);
  
      // Draw value
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(array[i], x + boxWidth / 2, y + boxHeight / 2);
    }
  }
  
