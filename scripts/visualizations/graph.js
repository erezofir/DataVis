function drawGraph(graphType) {
  const canvas = document.getElementById("graphCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;

  // Map nodes to positions on a circle
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

    // Draw edge line
    ctx.beginPath();
    ctx.moveTo(fromPos.x, fromPos.y);
    ctx.lineTo(toPos.x, toPos.y);
    ctx.strokeStyle = "#636e72";
    ctx.lineWidth = 2;
    ctx.stroke();

    // If directed graph, add arrowhead
    if (graphType === "directed") {
      const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x);
      const arrowLength = 12; // Length of the arrowhead
      const arrowWidth = 6; // Width of the arrowhead

      // Draw arrowhead
      ctx.beginPath();
      ctx.moveTo(
        toPos.x - arrowLength * Math.cos(angle - Math.PI / 6),
        toPos.y - arrowLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(toPos.x, toPos.y);
      ctx.lineTo(
        toPos.x - arrowLength * Math.cos(angle + Math.PI / 6),
        toPos.y - arrowLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.fillStyle = "#d63031"; // Color of the arrowhead
      ctx.fill();
    }
  });

  // Draw nodes
  nodes.forEach((node) => {
    const pos = positions[node];

    // Draw node circle
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#74b9ff";
    ctx.fill();
    ctx.strokeStyle = "#2d3436";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Add node label
    ctx.fillStyle = "#2d3436";
    ctx.font = "14px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node, pos.x, pos.y);
  });
}
