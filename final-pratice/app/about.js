let myContent = document.getElementById("myContent");
let selectedElement = null;

let navItems = document.getElementsByClassName("navItem");
for (let i = 0; i < navItems.length; i++) {
  let navItem = navItems[i];
  navItem.addEventListener("click", doThing);
}

let pageContent = [
  "This is the home page.",
  "This is the about page.",
  "This is the work page.",
  "This is the scream page.",
];

function doThing(event) {
  // event.target is always the thing that was clicked on

  event.target.style.color = "#00ff00";
  let pageid = Number(event.target.dataset.content);
  myContent.innerHTML = pageContent[pageid];

  if (selectedElement) {
    selectedElement.style.color = "#000";
  }

  selectedElement = event.target;
}
