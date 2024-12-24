class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let head = null;
  
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
  
  function deleteNode(value) {
    if (!head) return;
    if (head.value === value) {
      head = head.next;
    } else {
      let current = head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) current.next = current.next.next;
    }
    drawLinkedList();
  }
  
  function drawLinkedList() {
    const canvas = document.getElementById('linkedListCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const width = canvas.width;
    const nodeWidth = 60;
    const nodeHeight = 30;
    const spacing = 20; // Space between nodes
    let x = 10; // Starting x-coordinate
    let y = canvas.height / 2 - nodeHeight / 2;
  
    let current = head;
  
    while (current) {
      // Draw node
      ctx.strokeRect(x, y, nodeWidth, nodeHeight);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(current.value, x + nodeWidth / 2, y + nodeHeight / 2);
  
      // Draw arrow
      if (current.next) {
        ctx.beginPath();
        ctx.moveTo(x + nodeWidth, y + nodeHeight / 2);
        ctx.lineTo(x + nodeWidth + spacing / 2, y + nodeHeight / 2);
        ctx.lineTo(x + nodeWidth + spacing / 4, y + nodeHeight / 2 - 5);
        ctx.moveTo(x + nodeWidth + spacing / 2, y + nodeHeight / 2);
        ctx.lineTo(x + nodeWidth + spacing / 4, y + nodeHeight / 2 + 5);
        ctx.stroke();
      }
  
      x += nodeWidth + spacing;
      current = current.next;
    }
  }
  