"use strict";
prompt("What is your name");
prompt("What is their name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your love score is" + loveScore + "%" + "you love each other");
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is" + loveScore + "%");
}
if (loveScore <= 30) {
  alert(
    "Your love score is" +
      loveScore +
      "%" +
      "You go togethor like oil and water"
  );
}
