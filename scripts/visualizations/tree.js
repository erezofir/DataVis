class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Insert a node into the binary tree
function insertNode(value) {
  if (!value) return;
  const newNode = new TreeNode(value);

  if (!root) {
    root = newNode;
  } else {
    insertRecursively(root, newNode);
  }
  drawTree();
}

function insertRecursively(current, newNode) {
  if (newNode.value < current.value) {
    if (!current.left) {
      current.left = newNode;
    } else {
      insertRecursively(current.left, newNode);
    }
  } else {
    if (!current.right) {
      current.right = newNode;
    } else {
      insertRecursively(current.right, newNode);
    }
  }
}

// Delete a node from the binary tree
function deleteNode(value) {
  root = deleteRecursively(root, value);
  drawTree();
}

function deleteRecursively(current, value) {
  if (!current) return null;

  if (value < current.value) {
    current.left = deleteRecursively(current.left, value);
  } else if (value > current.value) {
    current.right = deleteRecursively(current.right, value);
  } else {
    if (!current.left) return current.right;
    if (!current.right) return current.left;

    const minLargerNode = findMin(current.right);
    current.value = minLargerNode.value;
    current.right = deleteRecursively(current.right, minLargerNode.value);
  }
  return current;
}

function findMin(current) {
  while (current.left) {
    current = current.left;
  }
  return current;
}

// Clear the entire tree
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

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "#6c9cf3";
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, x, y);

  if (node.left) {
    ctx.beginPath();
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x - offset, y + 70);
    ctx.stroke();
    drawNode(ctx, node.left, x - offset, y + 70, offset / 2);
  }

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
