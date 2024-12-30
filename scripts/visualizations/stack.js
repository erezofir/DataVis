// יצירת סצנה
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const canvas = document.getElementById("stackCanvas");

if (!canvas) {
  console.error("Canvas not found!");
}

renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

// נתונים לערימה
let stack = ["empty"];
let stackObjects = [];
let headPointer, tailPointer;

// פונקציות יצירה
function createPointer(name, yPosition) {
  const geometry = new THREE.BoxGeometry(0.5, 0.2, 0.5);
  const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  const pointer = new THREE.Mesh(geometry, material);
  pointer.position.set(-1.5, yPosition, 0);
  pointer.name = name;
  scene.add(pointer);
  return pointer;
}

function createBlock(value, yPosition) {
  const geometry = new THREE.BoxGeometry(1, 0.5, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.set(0, yPosition, 0);
  cube.name = value;
  return cube;
}

// ציור הערימה
function drawStack() {
  stackObjects.forEach(obj => scene.remove(obj));
  stackObjects = [];

  stack.forEach((value, index) => {
    const yPosition = index * 0.6;
    const block = createBlock(value, yPosition);
    scene.add(block);
    stackObjects.push(block);
  });

  updatePointers();
}

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

// פעולות לערימה
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

// חיבור כפתורים
document.getElementById("pushButton").addEventListener("click", () => {
  const value = prompt("Enter a value to push:");
  if (value) pushItem(value);
});

document.getElementById("popButton").addEventListener("click", popItem);
document.getElementById("clearButton").addEventListener("click", clearAll);

// מצלמה ואנימציה
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

drawStack();
animate();
