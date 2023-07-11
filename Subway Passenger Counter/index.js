let count = 0;

function increment() {
  document.getElementById("count-el").textContent = count += 1;
}

function save() {
  document.getElementById("save-el").textContent += count + " - ";
  document.getElementById("count-el").textContent = 0;
  count = 0;
}
