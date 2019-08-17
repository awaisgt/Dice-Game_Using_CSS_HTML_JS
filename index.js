var randNum =(Math.floor( Math.random()*6)+1);
var randNum2= (Math.floor(Math.random()*6)+1);
var fileName1="dice" + randNum +".png";
var fileName2="dice" + randNum2 +".png";
document.querySelectorAll("img")[0].setAttribute("src",fileName1);
document.querySelectorAll("img")[1].setAttribute("src",fileName2);


if(randNum>randNum2){

  document.querySelector("h1").innerHTML=("Player 1 Wins!!!");
}
else if (randNum2>randNum) {
  document.querySelector("h1").innerHTML=("Player 2 Wins!!!");

}
else {
  document.querySelector("h1").innerHTML=("Match Draw!!!")
}
