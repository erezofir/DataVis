// יצירת סצנה
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("stackCanvas").appendChild(renderer.domElement);

// נתונים לערימה
let stack = ["empty"];
let stackObjects = [];

// פונקציה ליצירת בלוק בערימה
function createBlock(value, yPosition) {
  console.log(`Creating block with value: ${value} at position: ${yPosition}`);
  const geometry = new THREE.BoxGeometry(1, 0.5, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.set(0, yPosition, 0);
  cube.name = value; // שמירת הערך של הבלוק
  return cube;
}

// ציור הערימה
function drawStack() {
  console.log("Drawing stack:", stack);

  // ניקוי הסצנה
  stackObjects.forEach(obj => scene.remove(obj));
  stackObjects = [];

  stack.forEach((value, index) => {
    const yPosition = index * 0.6; // מרווח בין הבלוקים
    const block = createBlock(value, yPosition);
    scene.add(block);
    stackObjects.push(block);
  });

  console.log("Stack objects:", stackObjects);
}

// פונקציה לדחיפת אלמנט לערימה
function pushItem(value) {
  console.log("Pushing value:", value);

  if (stack[0] === "empty") {
    stack[0] = value;
  } else {
    stack.push(value);
  }

  console.log("Stack after push:", stack);

  drawStack(); // עדכון הוויזואליזציה
}

// פונקציה להסרת אלמנט מהערימה
function popItem() {
  if (stack.length === 1 && stack[0] === "empty") {
    alert("Stack is empty!");
    return;
  }

  stack.pop();
  if (stack.length === 0) stack = ["empty"];

  console.log("Stack after pop:", stack);

  drawStack();
}

// פונקציה לריקון הערימה
function clearAll() {
  stack = ["empty"];
  console.log("Stack cleared.");
  drawStack();
}

// חיבור כפתורים לאירועים
const pushButton = document.getElementById("pushButton");
pushButton.addEventListener("click", () => {
  const value = prompt("Enter a value to push:");
  if (value) pushItem(value);
});

document.getElementById("popButton").addEventListener("click", popItem);
document.getElementById("clearButton").addEventListener("click", clearAll);

// הוספת מצלמה
camera.position.z = 5;

// אנימציה
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// התחלה
drawStack();
animate();
