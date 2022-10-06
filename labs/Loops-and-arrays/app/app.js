let num = document.getElementById("num");

for (let i = 1000; i < 6000; i += 1000) {
  console.log(i);
  num.innerHTML += i + "<br>";
}
