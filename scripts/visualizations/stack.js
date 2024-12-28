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
  const geometry = new THREE.BoxGeometry(1, 0.5, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.set(0, yPosition, 0);
  cube.name = value; // שמירת הערך של הבלוק
  return cube;
}

// ציור הערימה
function drawStack() {
  // ניקוי הסצנה
  stackObjects.forEach(obj => scene.remove(obj));
  stackObjects = [];

  stack.forEach((value, index) => {
    const yPosition = index * 0.6; // מרווח בין הבלוקים
    const block = createBlock(value, yPosition);
    scene.add(block);
    stackObjects.push(block);
  });
}

// פונקציה לדחיפת אלמנט לערימה
function pushItem() {
  const value = prompt("Enter a value to push:");
  if (!value) return;

  if (stack[0] === "empty") {
    stack[0] = value;
  } else {
    stack.push(value);
  }

  drawStack();
}

// פונקציה להסרת אלמנט מהערימה
function popItem() {
  if (stack.length === 1 && stack[0] === "empty") {
    alert("Stack is empty!");
    return;
  }

  stack.pop();
  if (stack.length === 0) stack = ["empty"];

  drawStack();
}

// פונקציה לריקון הערימה
function clearAll() {
  stack = ["empty"];
  drawStack();
}

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
