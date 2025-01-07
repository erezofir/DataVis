// Copy code to clipboard
function copyCode() {
    const codeElement = document.getElementById("java-code").innerText;
    navigator.clipboard
      .writeText(codeElement)
      .then(() => alert("Code copied to clipboard!"))
      .catch(() => alert("Failed to copy code."));
  }
  
  // Simulate running the code for Hash Table
  function runCode() {
    const outputElement = document.getElementById("output");
    const simulatedOutput = `Value for 'Two': 2
  HashMap after removal: {Two=2, Three=3}`;
    outputElement.textContent = simulatedOutput;
  }
  