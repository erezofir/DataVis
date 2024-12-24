class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = null;
  
  function insertNode(value) {
    root = insertIntoTree(root, value);
    drawTree();
  }
  
  function insertIntoTree(node, value) {
    if (!node) return new TreeNode(value);
    if (value < node.value) node.left = insertIntoTree(node.left, value);
    else node.right = insertIntoTree(node.right, value);
    return node;
  }
  
  function drawTree() {
    const canvas = document.getElementById('treeCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const radius = 20;
    const levelHeight = 50;
  
    function drawNode(value, x, y) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#cde9f9';
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(value, x, y);
    }
  
    function drawTreeRecursive(node, x, y, offset) {
      if (!node) return;
  
      drawNode(node.value, x, y);
  
      if (node.left) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - offset, y + levelHeight);
        ctx.stroke();
        drawTreeRecursive(node.left, x - offset, y + levelHeight, offset / 2);
      }
  
      if (node.right) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + offset, y + levelHeight);
        ctx.stroke();
        drawTreeRecursive(node.right, x + offset, y + levelHeight, offset / 2);
      }
    }
  
    drawTreeRecursive(root, canvas.width / 2, 50, canvas.width / 4);
  }
  
  