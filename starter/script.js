let input = document.getElementById("itemInput");
let ul = document.querySelector(".itemsAdded");
let enterButton = document.getElementById("enter");
let item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) createListElement();
}

function selectListItem() {
  //   let itemsAdded = document.querySelector("li");
  let listItem = event.target;
  listItem.style.backgroundColor = "#90ee90";
}

enterButton.addEventListener("click", addListAfterClick);
ul.addEventListener("click", selectListItem);
