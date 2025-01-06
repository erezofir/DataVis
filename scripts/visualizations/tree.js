class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Build binary tree from array
function buildBinaryTree(array) {
  if (!array || array.length === 0) return null;

  const nodes = array.map((value) =>
    value === null ? null : new TreeNode(value)
  );

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] !== null) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;

      if (leftIndex < nodes.length) {
        nodes[i].left = nodes[leftIndex];
      }
      if (rightIndex < nodes.length) {
        nodes[i].right = nodes[rightIndex];
      }
    }
  }

  return nodes[0];
}

// Generate tree from user input
function generateTree() {
  const input = prompt(
    "Enter values separated by commas (use 'null' for empty nodes):"
  );
  if (!input) return;

  const values = input
    .split(",")
    .map((v) => (v.trim().toLowerCase() === "null" ? null : parseInt(v.trim())))
    .filter((v) => v === null || !isNaN(v));

  root = buildBinaryTree(values);
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
