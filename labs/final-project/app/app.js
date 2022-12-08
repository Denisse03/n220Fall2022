let grid = document.getElementById("grid-container");
grid.addEventListener("click", itChange);
var cardFlip = 0;
let firstCard = 0;
let secondCard = 0;

function itChange(event) {
  if (event.target.dataset.clickable == "true") {
    event.target.setAttribute("data-clickable", "false");
    let flip = event.target.getAttribute("data-card");
    event.target.style.backgroundColor = flip;
    event.target.innerHTML = flip;
    cardFlip++;
    // console.log(cardFlip);

    if (cardFlip == 1) {
      firstCard = event.target;
      // console.log(firstCard);
    } else if (cardFlip == 2) {
      secondCard = event.target;
      // console.log(secondCard);

      if (firstCard.dataset.card == secondCard.dataset.card) {
        console.log("found a match");
        // remove both match card
        // event.target.style.display = "none";
        event.target.innerHTML = "";
        firstCard.innerHTML = "";
        secondCard.innerHTML = "";
      } else {
        console.log("try again");
        setTimeout(function () {
          firstCard.innerHTML = "Flip";
          secondCard.innerHTML = "Flip";
          firstCard.setAttribute("data-clickable", "true");
          secondCard.setAttribute("data-clickable", "true");
        }, 2000);
      }
      cardFlip = 0;
    }
    // console.log("cardflip");
  }
}

function replay() {
  location.reload();
}
