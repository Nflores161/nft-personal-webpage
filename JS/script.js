
const home = document.getElementById('home');

home.addEventListener("mouseover", mouseDisplay);

function mouseDisplay() {
  console.log("mouse display worked");
  home.style.color = "#2baec5";
}