let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
  let response = event.target.getAttribute("data-response");

  event.target.style.backgroundColor = response;

  event.target.innerHtml = response;
}
