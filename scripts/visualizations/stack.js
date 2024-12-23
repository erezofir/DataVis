function drawStack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rectWidth = 100;
  const rectHeight = 40;

  stack.forEach((item, index) => {
    const x = canvas.width / 2 - rectWidth / 2; // Center horizontally
    const y = canvas.height - (index + 1) * 50; // Position elements vertically

    // Draw rectangle
    ctx.fillStyle = "#d0ebff"; // Light blue background
    ctx.fillRect(x, y, rectWidth, rectHeight);
    ctx.strokeRect(x, y, rectWidth, rectHeight);

    // Add text (cell content)
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "16px 'Montserrat', sans-serif"; // Font for "empty"
    ctx.fillText(item, x + rectWidth / 2, y + rectHeight / 2 + 5);

    // Add head pointer
    if (index === head) {
      ctx.fillStyle = "#3498db"; // Blue for head
      ctx.font = "16px 'Montserrat', sans-serif";
      ctx.fillText("Head", x + rectWidth + 20, y + rectHeight / 2 + 5);

      // Arrow for head pointer
      ctx.beginPath();
      ctx.moveTo(x + rectWidth + 10, y + rectHeight / 2);
      ctx.lineTo(x + rectWidth + 20, y + rectHeight / 2 - 5);
      ctx.lineTo(x + rectWidth + 20, y + rectHeight / 2 + 5);
      ctx.closePath();
      ctx.fillStyle = "#3498db";
      ctx.fill();
    }

    // Add tail pointer
    if (index === tail) {
      ctx.fillStyle = "#27ae60"; // Green for tail
      ctx.font = "16px 'Montserrat', sans-serif";
      ctx.fillText("Tail", x - 40, y + rectHeight / 2 + 5);

      // Arrow for tail pointer
      ctx.beginPath();
      ctx.moveTo(x - 10, y + rectHeight / 2);
      ctx.lineTo(x - 20, y + rectHeight / 2 - 5);
      ctx.lineTo(x - 20, y + rectHeight / 2 + 5);
      ctx.closePath();
      ctx.fillStyle = "#27ae60";
      ctx.fill();
    }
  });
}
