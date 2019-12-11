// Your code here

let doger = document.getElementById("dodger");

dodger.style.backgroundColor = '#a869bb';

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key == "ArrowRight"){
    moveDodgerRight();
  } else{
    console.log("Invalid Key")
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "")
  let left = parseInt(leftNumbers, 10);
  if (left > 0 ) {
    dodger.style.left = `${left + 1}px`
  }
}

