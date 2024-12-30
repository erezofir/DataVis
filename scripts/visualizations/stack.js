const stack = [];
const stackContainer = document.getElementById('stack-container');

// פונקציה ליצירת אלמנט בערימה
function createStackElement(value, index) {
  const element = document.createElement('div');
  element.className = 'stack-element';
  element.textContent = value;
  element.style.bottom = `${index * 45}px`; // מיקום יחסי בערימה
  return element;
}

// ציור הערימה
function drawStack() {
  stackContainer.innerHTML = ''; // ניקוי הקונטיינר
  stack.forEach((value, index) => {
    const element = createStackElement(value, index);
    stackContainer.appendChild(element);
  });
}

// פונקציות לערימה
function pushItem(value) {
  stack.push(value);
  drawStack();
}

function popItem() {
  if (stack.length === 0) {
    alert('Stack is empty!');
    return;
  }
  stack.pop();
  drawStack();
}

function clearAll() {
  stack.length = 0;
  drawStack();
}

// חיבור כפתורים לאירועים
document.getElementById('pushButton').addEventListener('click', () => {
  const value = prompt('Enter a value to push:');
  if (value) pushItem(value);
});

document.getElementById('popButton').addEventListener('click', popItem);
document.getElementById('clearButton').addEventListener('click', clearAll);

// התחלה
drawStack();
