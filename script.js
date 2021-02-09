document.getElementById("actor1_photo").onmouseover = function() {mouseOver()};
document.getElementById("actor1_photo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("actor1_name").style.color = "red";
}

function mouseOut() {
  document.getElementById("actor1_name").style.color = "black";
}
