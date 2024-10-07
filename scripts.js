function getUserInput() {
  return prompt("Enter number of grids per dimention (n*n)\nmaximum number is 32");
};

let userInput = parseInt(getUserInput());
// let userInput = 10;
if (userInput == null || userInput == '' || +userInput > 32) {
  location.reload()
}
let BOARD_SIZE = userInput;
let FLEX_BASIS = 100 / BOARD_SIZE;
let OPACITY_PERCENTAGE = 0.2;

const container = document.querySelector("#container");
const newBoard = document.querySelector("#button");
console.log(newBoard);


for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
  const grid = document.createElement("div");
  grid.className = "grid";
  grid.style.flexBasis = FLEX_BASIS + "%";
  grid.style.height = FLEX_BASIS + "%";
  container.appendChild(grid);
}

container.addEventListener("mouseover", (e) => {
  console.log(e.target.className);
  console.log(e.target.style.opacity);
  if (e.target.className.includes("grid")) {
    e.target.classList.add("touched");
    e.target.style.opacity = +e.target.style.opacity + OPACITY_PERCENTAGE
  }
});


// newBoard.addEventListener('click', e => {
//   userInput = getUserInput()
//   if (userInput == null || userInput == '' || +userInput > 32) {

//     alert("Not a valid number")
//     getUserInput()
//   }
// });