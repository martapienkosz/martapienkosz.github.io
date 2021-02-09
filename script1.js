// interactivity: showing name of actor once mouse over the picture

// creating function for two events: mouse over and of of the text
document.getElementById("actor1_photo").onmouseover = function() {mouseOver1()};
document.getElementById("actor1_photo").onmouseout = function() {mouseOut1()};

// changing display method when mouse over the text
function mouseOver1() {
  document.getElementById("actor1_name").style.display = "block";
}

function mouseOut1() {
  document.getElementById("actor1_name").style.display = "none";
}


// analogical functions for two other photographs and text boxs
document.getElementById("actor2_photo").onmouseover = function() {mouseOver2()};
document.getElementById("actor2_photo").onmouseout = function() {mouseOut2()};

function mouseOver2() {
  document.getElementById("actor2_name").style.display = "block";
}

function mouseOut2() {
  document.getElementById("actor2_name").style.display = "none";
}


document.getElementById("actor3_photo").onmouseover = function() {mouseOver3()};
document.getElementById("actor3_photo").onmouseout = function() {mouseOut3()};

function mouseOver3() {
  document.getElementById("actor3_name").style.display = "block";
}

function mouseOut3() {
  document.getElementById("actor3_name").style.display = "none";
}
