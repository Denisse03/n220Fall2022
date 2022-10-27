let duckElement = document.querySelectorAll(".duck");
let duckidEl = document.querySelector("#duckid");
console.log(duckElement);

Array.from(duckElement).forEach(function (duck, index) {
  duck.addEventListener("click", function () {
    if (index === 3) {
      duckidEl.innerHTML = "winner!";
    } else {
      duckidEl.innerHTML = index;
    }
    //   console.log("hello");
    // duck.style.display = "none";
    duckidEl.innerHtml = index;
    duck.style.opacity = 0.3;
  });
});

// for (let i = 0; i < duckElement.length; i++) {
//   let duck = duckElement[i];
//   duck.style.display = "none";
// }
