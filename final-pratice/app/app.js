let myContent = document.getElementById("myContent");

function doThing(event) {
  // event.target is always the thing that was clicked on
  console.log(event.target);
  event.target.style.color = "#00ff00";
  let content = event.target.dataset.content;
  myContent.innerHTML = content;
}
