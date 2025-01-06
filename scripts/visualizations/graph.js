function drawGraph(graphType) {
  const canvas = document.getElementById("graphCanvas");
  const ctx = canvas.getContext("2d");

  // נקה את הקנבס
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;

  // מיפוי הצמתים למיקומים על מעגל
  const positions = {};
  const angleStep = (2 * Math.PI) / nodes.length;

  nodes.forEach((node, index) => {
    const angle = index * angleStep;
    positions[node] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  // ציור הקצוות
  edges.forEach(([from, to]) => {
    const fromPos = positions[from];
    const toPos = positions[to];

    // קו בסיס של הקצה
    ctx.beginPath();
    ctx.moveTo(fromPos.x, fromPos.y);
    ctx.lineTo(toPos.x, toPos.y);
    ctx.strokeStyle = "#636e72";
    ctx.lineWidth = 2;
    ctx.stroke();

    // אם הגרף מכוון, נוסיף חצים
    if (graphType === "directed") {
      const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x);
      const arrowLength = 10;

      // קווים עבור החץ
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
      ctx.strokeStyle = "#636e72";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });

  // ציור הצמתים
  nodes.forEach((node) => {
    const pos = positions[node];

    // ציור מעגל עבור כל צומת
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#74b9ff";
    ctx.fill();
    ctx.strokeStyle = "#2d3436";
    ctx.lineWidth = 2;
    ctx.stroke();

    // הוספת מספר הצומת
    ctx.fillStyle = "#2d3436";
    ctx.font = "15px Montserrat";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node, pos.x, pos.y);
  });
}
