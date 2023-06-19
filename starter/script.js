let input = document.getElementById("itemInput");
let ul = document.querySelector(".itemsAdded");
let enterButton = document.getElementById("enter");
let item = document.getElementsByTagName("li");

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  //   let deleteButton = document.createElement("button");
  //   deleteButton.appendChild(document.createTextNode("X"));
}

enterButton.addEventListener("click", createListElement);
