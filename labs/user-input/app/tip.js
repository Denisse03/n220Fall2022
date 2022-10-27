let tip = document.getElementById("tip");
let f = document.getElementById("final");

function calculator() {
  let amount = Number(tip.value);
  let Tips = amount * 0.05;
  let final = amount + Tips;

  f.innerHTML = "amount is" + final;
}
