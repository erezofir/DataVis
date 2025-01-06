let nodes = [];
let edges = [];

function generateGraph() {
  const input = document.getElementById("graph-input").value;
  if (!input) return;

  try {
    const edgeList = JSON.parse(input);
    nodes = [...new Set(edgeList.flat())]; // Create a unique list of nodes
    edges = edgeList;
    drawGraph();
  } catch (error) {
    alert("Invalid input format. Please use the format: [[1,2],[2,3],[3,1]]");
  }
}

function clearGraph() {
  nodes = [];
  edges = [];
  drawGraph();
}

function drawGraph() {
  const canvas = document.getElementById("graphCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;

  // Map nodes to positions
  const positions = {};
  const angleStep = (2 * Math.PI) / nodes.length;

  nodes.forEach((node, index) => {
    const angle = index * angleStep;
    positions[node] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  // Draw edges
  edges.forEach(([from, to]) => {
    const fromPos = positions[from];
    const toPos = positions[to];

    ctx.beginPath();
    ctx.moveTo(fromPos.x, fromPos.y);
    ctx.lineTo(toPos.x, toPos.y);
    ctx.strokeStyle = "#636e72";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Draw nodes
  nodes.forEach((node) => {
    const pos = positions[node];
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#74b9ff";
    ctx.fill();
    ctx.strokeStyle = "#2d3436";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw node label
    ctx.fillStyle = "#2d3436";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node, pos.x, pos.y);
  });
}
