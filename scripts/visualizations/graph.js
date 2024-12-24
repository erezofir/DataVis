const graph = {};

function addNode(node) {
    if (!graph[node]) graph[node] = [];
    drawGraph();
  }
  
function removeNode(node) {
    delete graph[node];
        for (const key in graph) {
            graph[key] = graph[key].filter((neighbor) => neighbor !== node);
        }
    drawGraph();
}
  

function drawGraph() {
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const nodes = Object.keys(graph);
    const positions = {};
  
    nodes.forEach((node, index) => {
      const x = canvas.width / 2 + Math.cos((index / nodes.length) * 2 * Math.PI) * 100;
      const y = canvas.height / 2 + Math.sin((index / nodes.length) * 2 * Math.PI) * 100;
      positions[node] = { x, y };
      drawNode(node, x, y);
    });
  
    nodes.forEach((node) => {
      graph[node].forEach((neighbor) => {
        drawEdge(positions[node], positions[neighbor]);
      });
    });
  
    function drawNode(label, x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffcc99';
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#000';
      ctx.fillText(label, x, y);
    }
  
    function drawEdge(start, end) {
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }
  }
  
