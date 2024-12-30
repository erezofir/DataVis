// יצירת סצנה
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("stackCanvas").appendChild(renderer.domElement);

// נתונים לערימה
let stack = ["empty"];
let stackObjects = [];
let headPointer, tailPointer;

// יצירת מצביעים
function createPointer(name, yPosition) {
  const geometry = new THREE.BoxGeometry(0.5, 0.2, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  const pointer = new THREE.Mesh(geometry, material);
  pointer.position.set(-1.5, yPosition, 0);
  pointer.name = name;
  scene.add(pointer);
  return pointer;
}

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

  updatePointers();
}

// עדכון מצביעים
function updatePointers() {
  if (!headPointer) headPointer = createPointer("Head", 0);
  if (!tailPointer) tailPointer = createPointer("Tail", 0);

  if (stack.length > 0 && stack[0] !== "empty") {
    headPointer.position.y = (stack.length - 1) * 0.6;
    tailPointer.position.y = 0;
  } else {
    headPointer.position.y = 0;
    tailPointer.position.y = 0;
  }
}

// פונקציות לערימה
function pushItem(value) {
  if (stack[0] === "empty") {
    stack[0] = value;
  } else {
    stack.push(value);
  }
  drawStack();
}

function popItem() {
  if (stack.length === 1 && stack[0] === "empty") {
    alert("Stack is empty!");
    return;
  }
  stack.pop();
  if (stack.length === 0) stack = ["empty"];
  drawStack();
}

function clearAll() {
  stack = ["empty"];
  drawStack();
}

// חיבור כפתורים לאירועים
document.getElementById("pushButton").addEventListener("click", () => {
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
