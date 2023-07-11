let inputs = [];

let inputsFromStorage = JSON.parse(localStorage.getItem("inputs"));
if (inputsFromStorage) {
  showList(inputsFromStorage);
}

document.getElementById("save-btn").addEventListener("click", function () {
  let input = document.getElementById("input-el").value;
  inputs.push(input);
  localStorage.setItem("inputs", JSON.stringify(inputs));
  document.getElementById("input-el").value = "";
  showList(inputs);
});

document.getElementById("tab-btn").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    inputs.push(tabs[0].url);
    localStorage.setItem("inputs", JSON.stringify(inputs));
    showList(inputs);
  });
});

document.getElementById("delete-btn").addEventListener("click", function () {
  localStorage.clear();
  inputs = [];
  showList(inputs);
});

function showList(list) {
  let inputList = "";
  for (let i = 0; i < list.length; i++) {
    inputList += `
    <li>
    <a target='_blank' href='${list[i]}'>${list[i]}</a>
    </li>
    `;
  }
  document.getElementById("list-el").innerHTML = inputList;
}
