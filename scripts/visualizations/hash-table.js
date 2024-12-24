const hashTable = {};

function insertKeyValue(key, value) {
  hashTable[key] = value;
  drawHashTable();
}

function deleteKey(key) {
  delete hashTable[key];
  drawHashTable();
}

function searchKey(key) {
    if (key in hashTable) {
      alert(`Value: ${hashTable[key]}`);
    } else {
      alert('Key not found.');
    }
  }
  
function clearHashTable() {
    for (const key in hashTable) {
        delete hashTable[key];
    }
    drawHashTable();
}
  

function drawHashTable() {
    const canvas = document.getElementById('hashTableCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const boxWidth = 100;
    const boxHeight = 30;
    const spacing = 10;
    let y = 10;
  
    Object.keys(hashTable).forEach((key) => {
      const x = 10;
  
      // Draw key box
      ctx.strokeRect(x, y, boxWidth, boxHeight);
      ctx.fillText(key, x + boxWidth / 2, y + boxHeight / 2);
  
      // Draw value box
      ctx.strokeRect(x + boxWidth + spacing, y, boxWidth, boxHeight);
      ctx.fillText(hashTable[key], x + 1.5 * boxWidth + spacing, y + boxHeight / 2);
  
      y += boxHeight + spacing;
    });
  }
  
