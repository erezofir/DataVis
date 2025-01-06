class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = null;

// Add a node to the end of the linked list
function addNode(value) {
  const newNode = new ListNode(value);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  drawLinkedList();
}

// Traverse the linked list and display its elements
function traverseList() {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  alert(`Linked List: ${values.join(' -> ')}`);
}

// Delete a node by its value
function deleteNode(value) {
  if (!head) return;

  if (head.value === value) {
    head = head.next;
  } else {
    let current = head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
  drawLinkedList();
}

// Draw the linked list on the canvas
function drawLinkedList() {
  const canvas = document.getElementById('linkedListCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const nodeWidth = 60;
  const nodeHeight = 30;
  const spacing = 20; // Space between nodes
  let x = 10; // Starting x-coordinate
  let y = canvas.height / 2 - nodeHeight / 2;

  let current = head;

  while (current) {
    // Draw the node rectangle
    ctx.fillStyle = "#6c9cf3";
    ctx.fillRect(x, y, nodeWidth, nodeHeight);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(x, y, nodeWidth, nodeHeight);

    // Draw the node value
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(current.value, x + nodeWidth / 2, y + nodeHeight / 2);

    // Draw the arrow if there's a next node
    if (current.next) {
      const arrowStartX = x + nodeWidth;
      const arrowEndX = x + nodeWidth + spacing - 10;

      ctx.beginPath();
      ctx.moveTo(arrowStartX, y + nodeHeight / 2);
      ctx.lineTo(arrowEndX, y + nodeHeight / 2);
      ctx.stroke();

      // Draw arrowhead
      ctx.beginPath();
      ctx.moveTo(arrowEndX, y + nodeHeight / 2 - 5);
      ctx.lineTo(arrowEndX + 10, y + nodeHeight / 2);
      ctx.lineTo(arrowEndX, y + nodeHeight / 2 + 5);
      ctx.fillStyle = "#000";
      ctx.fill();
    }

    x += nodeWidth + spacing;
    current = current.next;
  }
}
