var e = document.getElementById('tree');

e.onmouseover = function () {
    document.getElementById('popup1').style.display = 'block';
}

e.onmouseout = function () {
    document.getElementById('popup1').style.display = 'none';
}


var e = document.getElementById('vial');

e.onmouseover = function () {
    document.getElementById('popup2').style.display = 'block';
}

e.onmouseout = function () {
    document.getElementById('popup2').style.display = 'none';
}


var e = document.getElementById('truck');

e.onmouseover = function () {
    document.getElementById('popup3').style.display = 'block';
}

e.onmouseout = function () {
    document.getElementById('popup3').style.display = 'none';
}


var e = document.getElementById('use');

e.onmouseover = function () {
    document.getElementById('popup4').style.display = 'block';
}

e.onmouseout = function () {
    document.getElementById('popup4').style.display = 'none';
}


var e = document.getElementById('recycle');

e.onmouseover = function () {
    document.getElementById('popup5').style.display = 'block';
}

e.onmouseout = function () {
    document.getElementById('popup5').style.display = 'none';
}

function myFunction() {
  var x = document.getElementById("popup-fakta");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
