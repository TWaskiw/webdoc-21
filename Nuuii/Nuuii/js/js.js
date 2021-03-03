var navItems = ["tree", "vial", "truck", "use", "recycle"];

var i;
for (i = 0; i < navItems.length; i++) {
    var e = document.getElementById(navItems[i]);

    e.onmouseover = function () {
        document.getElementById('popup' + (i + 1)).style.display = 'block';
    }
    
    e.onmouseout = function () {
        document.getElementById('popup' + (i + 1)).style.display = 'none';
    }
}



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


var oceanButton = document.getElementById('button2050');

oceanButton.onclick = function () {
    document.getElementById('ocean2020').style.display = 'none';
    document.getElementById('ocean2050').style.display = 'block';
}

var oceanButton = document.getElementById('button2020');

oceanButton.onclick = function () {
    document.getElementById('ocean2020').style.display = 'block';
    document.getElementById('ocean2050').style.display = 'none';
}