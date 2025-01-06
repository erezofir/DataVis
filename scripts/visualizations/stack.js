let stack = []; // Array to store stack elements

function updateStackDisplay() {
  const stackContainer = document.getElementById('stackContainer');
  const emptyLabel = document.getElementById('emptyLabel');
  
  // Clear the stack container
  stackContainer.innerHTML = '';

  if (stack.length === 0) {
    // Show "EMPTY!" label if the stack is empty
    emptyLabel.style.display = 'block';
  } else {
    // Hide "EMPTY!" label and display stack elements
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

  // Push the value to the stack and clear the input field
  stack.push(value);
  stackInput.value = '';
  updateStackDisplay();
}

function handlePop() {
  if (stack.length === 0) {
    alert('Stack is empty!');
    return;
  }

  // Remove the last value from the stack
  stack.pop();
  updateStackDisplay();
}

function handleClear() {
  // Clear the entire stack
  stack = [];
  updateStackDisplay();
}

// Initialize the stack display when the page loads
updateStackDisplay();
