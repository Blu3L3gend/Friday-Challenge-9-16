var num = 0;
window.onload = function () {
  var name = prompt("What is your name?");
  var age = prompt("How old are you?");
  var user_input = prompt("Favorite Cookie?");

  var space = document.getElementById("space");
};

var cookie = document.getElementById("Chocolate Chip");

function cookieClick() {
  num += 1;

  var numbers = document.getElementById("numbers");

  //upgrade level for printing
  var upgradeLevel = document.getElementById("upgradeLevel");

  numbers.innerHTML = num;

  if (num >= 10) {
    num += 1;
    upgradeLevel.innerHTML = "Beginner Level";
  }

  if (num >= 20) {
    num += 5;
    upgradeLevel.innerHTML = "Granny Level";
  }

  if (num >= 40) {
    num += 15;
    upgradeLevel.innerHTML = "Boss Level";
  }

  if (num >= 50) {
    num += 25;
    upgradeLevel.innerHTML = "Manager Level";
  }
}
