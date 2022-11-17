let answer = document.getElementById("answer");
answer.addEventListener("click", Reveal);

function Reveal(event) {
  let response = event.target.getAttribute("data-answer");
  event.target.innerHTML = response;
}
