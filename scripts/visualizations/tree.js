class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

// Build Binary Tree
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

// Build Binary Search Tree
function buildBinarySearchTree(array) {
  if (!array || array.length === 0) return null;

  const root = new TreeNode(array[0]);

  function insertNode(current, value) {
    if (value < current.value) {
      if (!current.left) {
        current.left = new TreeNode(value);
      } else {
        insertNode(current.left, value);
      }
    } else {
      if (!current.right) {
        current.right = new TreeNode(value);
      } else {
        insertNode(current.right, value);
      }
    }
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== null) {
      insertNode(root, array[i]);
    }
  }

  return root;
}

// Generate Tree
function generateTree() {
  const input = document.getElementById("tree-input").value;
  const type = document.getElementById("tree-type").value;

  if (!input) return;

  const values = input
    .split(",")
    .map((v) => (v.trim().toLowerCase() === "null" ? null : parseInt(v.trim())))
    .filter((v) => v === null || !isNaN(v));

  root =
    type === "binary-tree"
      ? buildBinaryTree(values)
      : buildBinarySearchTree(values);

  drawTree();
}

// Clear Tree
function clearTree() {
  root = null;
  drawTree();
}

// Draw Tree
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

  // Draw node circle
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.stroke();

  // Assign colors
  if (!node.left && !node.right) {
    ctx.fillStyle = "#90ee90"; // Leaf node
  } else if (node === root) {
    ctx.fillStyle = "#db7093"; // Root node
  } else {
    ctx.fillStyle = "#98d5f2"; // Internal node
  }

  ctx.fill();

  // Draw node value
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
