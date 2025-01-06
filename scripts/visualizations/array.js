const array = [];

// Add item to array
function addItem(value) {
  if (value) {
    array.push(value);
    drawArray();
  } else {
    alert("Please enter a valid value.");
  }
}

// Remove item by index
function removeItem(index) {
  index = parseInt(index);
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
    drawArray();
  } else {
    alert("Invalid index.");
  }
}

// Search for an item in the array
function searchItem(value) {
  const index = array.indexOf(value);
  if (index !== -1) {
    alert(`Item found at index: ${index}`);
    highlightElement(index); // Highlight the found element
  } else {
    alert("Item not found.");
  }
}

// Highlight an element for a brief moment
function highlightElement(index) {
  const canvas = document.getElementById("arrayCanvas");
  const ctx = canvas.getContext("2d");

  const boxWidth = 60;
  const boxHeight = 30;
  const spacing = 10;
  const startX = (canvas.width - (array.length * boxWidth + (array.length - 1) * spacing)) / 2;
  const y = canvas.height / 2 - boxHeight / 2;

  const x = startX + index * (boxWidth + spacing);

  // Highlight box
  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
  ctx.fillRect(x, y, boxWidth, boxHeight);

  // Re-draw border and value
  ctx.strokeStyle = "#000";
  ctx.strokeRect(x, y, boxWidth, boxHeight);
  ctx.fillStyle = "#fff";
  ctx.fillText(array[index], x + boxWidth / 2, y + boxHeight / 2);

  setTimeout(drawArray, 1000); // Re-draw array after 1 second
}

// Draw the array on canvas
function drawArray() {
  const canvas = document.getElementById("arrayCanvas");
  const ctx = canvas.getContext("2d");
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
    ctx.fillStyle = "#6c9cf3";
    ctx.fillRect(x, y, boxWidth, boxHeight);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(x, y, boxWidth, boxHeight);

    // Draw value
    ctx.fillStyle = "#fff";
    ctx.font = "13px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(array[i], x + boxWidth / 2, y + boxHeight / 2);

    // Draw index
    ctx.fillStyle = "#000";
    ctx.font = "12px Montserrat";
    ctx.textAlign = "center";
    ctx.fillText(i, x + boxWidth / 2, y + boxHeight + 15);
  }
}

// Initial draw
drawArray();

function copyCode() {
  const code = document.getElementById("java-code");
  code.select(); // Select the text in the textarea
  code.setSelectionRange(0, 99999); // For mobile devices

  try {
    document.execCommand("copy");
    alert("Code copied to clipboard!");
  } catch (err) {
    alert("Failed to copy code.");
  }
}

function runCode() {
  const code = document.getElementById("java-code").value;

  // סימולציה של הרצת הקוד - לצערנו אי אפשר להריץ Java ישירות בדפדפן.
  const outputElement = document.getElementById("output");

  // דוגמת פלט – אפשר להוסיף לוגיקה שמדמה הרצה
  if (code.includes("numbers")) {
    outputElement.textContent = `First Element: 1\nModified Array:\n1 2 10 4 5`;
  } else {
    outputElement.textContent = "Code executed. Output not available for this code.";
  }
}
