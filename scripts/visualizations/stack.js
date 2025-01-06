let stack = [];

function updateStackDisplay() {
  const stackContainer = document.getElementById('stackContainer');
  const emptyLabel = document.getElementById('emptyLabel');
  stackContainer.innerHTML = ''; // Clear the container

  if (stack.length === 0) {
    emptyLabel.style.display = 'block';
  } else {
    emptyLabel.style.display = 'none';
    stack.forEach((item) => {
      const stackItem = document.createElement('div');
      stackItem.className = 'stack-item';
      stackItem.textContent = item;
      stackContainer.appendChild(stackItem);
    });
  }
}

function handlePush() {
  const stackInput = document.getElementById('stackInput');
  const value = stackInput.value.trim();

  if (!value) {
    alert('Please enter a value!');
    return;
  }

  stack.push(value);
  stackInput.value = ''; // Clear input
  updateStackDisplay();
}

function handlePop() {
  if (stack.length === 0) {
    alert('Stack is empty!');
    return;
  }

  stack.pop();
  updateStackDisplay();
}

function handleClear() {
  stack = [];
  updateStackDisplay();
}

// Initialize the stack display
updateStackDisplay();
