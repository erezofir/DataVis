class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Function to build a balanced binary tree from an array
function buildTreeFromArray(array) {
  if (!array || array.length === 0) return null;

  // Sort the array to ensure balanced tree
  array.sort((a, b) => a - b);

  // Recursive function to create the tree
  function buildTree(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);

    return node;
  }

  return buildTree(array, 0, array.length - 1);
}

// Generate tree from user input
function generateTree() {
  const input = prompt("Enter values separated by commas:");
  if (!input) return;

  const values = input
    .split(",")
    .map((v) => parseInt(v.trim()))
    .filter((v) => !isNaN(v));

  root = buildTreeFromArray(values);
  drawTree();
}

// Clear the tree
function clearTree() {
  root = null;
  drawTree();
}

// Draw the binary tree on canvas
function drawTree() {
  const canvas = document.getElementById("treeCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (root) {
    drawNode(ctx, root, canvas.width / 2, 50, canvas.width / 4);
  }
}

function drawNode(ctx, node, x, y, offset) {
  if (!node) return;

  // Draw the node
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "#6c9cf3";
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, x, y);

  // Draw left child
  if (node.left) {
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x - offset, y + 70);
    ctx.stroke();
    drawNode(ctx, node.left, x - offset, y + 70, offset / 2);
  }

  // Draw right child
  if (node.right) {
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + offset, y + 70);
    ctx.stroke();
    drawNode(ctx, node.right, x + offset, y + 70, offset / 2);
  }
}

// Initial draw
drawTree();
