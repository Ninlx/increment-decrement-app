/* we are going to get the id of our cursor from the dom */
const crsr = document.getElementById("cursor__conn");

/* set timeout for the cursor mouseStopped function */
var stoppedTime;

/* if the cursor is moving then the style intended for the cursor should be apply */
window.addEventListener("mousemove", function (e) {
  const y = e.pageY; // vertical axis of a system of coordinates
  const x = e.pageX; // horizontal axis of a system of coordinates

  /* then, the style should follow where the cursor is pointing on the website */
  crsr.style.top = y + "px";
  crsr.style.left = x + "px";
  crsr.style.display = "block";

  /* if the mouse stopped moving for about 2 seconds then, it should disappear */
  function mouseStopped() {
    crsr.style.display = "none";
  }

  /* if the cursor is stopped for 15 seconds then, it will disappear */
  clearTimeout(stoppedTime);
  stoppedTime = setTimeout(mouseStopped, 15000);
});

/* if the cursor is out on the coordinates of the website then, the cursor should also be followed and disappear from the website */
window.addEventListener("mouseout", function () {
  crsr.style.display = "none";
});

const countelem = document.getElementById("count");
let count = 0;

/* function for inrementing the number */
function increment() {
  count = count + 1;
  countelem.innerText = count;
}

/* function to decrement the number */
function decrement() {
  /* the count will decrement by -1 and endless */
  /* count = count - 1; */

  /* the count will be greater than or equal to zero */
  var short = count > 0 ? (count = count - 1) : count; // the shorthand if else statement where if the count is greater than 0 then the count should decrement by 1 or minus 1

  /*   if (count > 0) {
    count = count - 1;
  } */
  countelem.innerText = short;
}
