/* ---------- PART 2: JavaScript Functions, Scope, Parameters, Return Values ---------- */

// Global variable
let globalCount = 0;

// Function with parameters + return value
function multiply(a, b) {
  return a * b; // return product
}

// Function demonstrating local vs global scope
function incrementGlobal() {
  let localCount = 5; // local variable
  globalCount++;      // modifies global variable
  console.log("Local:", localCount, "| Global:", globalCount);
}

// Reusable function to toggle a CSS class (triggers animation)
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

/* ---------- PART 3: JS + CSS Animations Combined ---------- */

// Animate box when button clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleAnimation("animatedBox", "animate");
  incrementGlobal(); // show scope concept
});

// Modal popup logic
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});

// Example: use return value
console.log("Multiply 3*4 =", multiply(3, 4)); // should print 12
