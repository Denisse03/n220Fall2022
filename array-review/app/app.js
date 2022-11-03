let container = document.getElementById("container");

let awkwardSilence = [
  "The answer is obvious",
  "I don't care",
  "...",
  "Im trying to take notes",
];

let iCollection = awkwardSilence.filter((thought) => {
  return thought.toLowerCase().includes("i");
});

console.log(iCollection);

// map
// modifies elements

// reduce
// return a single number

// foreach
// loops through all the elements

// filter
// return a sub-array

// let tally = 0;
// let passed = true;
// for (var i = 0; i < awkwardSilence.length; i++) {
//   let thought = awkwardSilence[i];

//   if (thought.toLowerCase().includes("i")) {
//     passed = false;
//     break;
//   }
// }

if (iCollection.length > 0) {
  container.innerHTML = "Test failed!";
}
