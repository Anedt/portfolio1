window.addEventListener("load", showTitle);

let point;
let liv;

const soppel = document.querySelector("#soppel_container");
const soppel2 = document.querySelector("#soppel_container2");
const soppel3 = document.querySelector("#soppel_container3");
const soppel4 = document.querySelector("#soppel_container4");
const blad = document.querySelector("#blad_container");
const blad2 = document.querySelector("#blad_container2");
const blad3 = document.querySelector("#blad_container3");
const fly = document.querySelector("#fly_container");


function showTitle() {
  console.log("showTitle");
  hideAllScreens();

  document.querySelector("#start").classList.remove("hide");

  document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  hideAllScreens();

  point = 0;
  liv = 3;

  document.querySelector("#mine_points").textContent = point;


  document.querySelector("#hjerte1").classList.remove("gray");
  document.querySelector("#hjerte2").classList.remove("gray");
  document.querySelector("#hjerte3").classList.remove("gray");


 document.querySelector("#sand").classList.add("timer");

  document.querySelector("#sand").addEventListener("animationend", endGame);

  document.querySelector("#mine_points").textContent = point;
  document.querySelector("#mine_liv").textContent = liv;

soppel.classList.add("fly")
  let rnd = generateRandomNumber(10);
 soppel.classList.add("pos" + rnd);
  rnd = generateRandomNumber(3);
soppel.classList.add("speed" + rnd);



blad.classList.add("fly");
  rnd = generateRandomNumber(5);
  blad.classList.add("fly" + rnd);
  rnd = generateRandomNumber(2);
  blad.classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  blad.classList.add("delay" + rnd);






  document.querySelector("#soppel_container").addEventListener("click",clickSoppel);

  document.querySelector("#blad_container").addEventListener("click", clickBlad);

  document.querySelector("#soppel_container").addEventListener("animationiteration", resetSoppel);

  document.querySelector("#blad_container").addEventListener("animationiteration", resetBlad);

  document.querySelector("#soppel_container2").addEventListener("click",clickSoppel);

  document.querySelector("#blad_container2").addEventListener("click", clickBlad);

  document.querySelector("#soppel_container2").addEventListener("animationiteration", resetSoppel);

  document.querySelector("#blad_container2").addEventListener("animationiteration", resetBlad);

  document.querySelector("#soppel_container3").addEventListener("click",clickSoppel);

  document.querySelector("#blad_container3").addEventListener("click", clickBlad);

  document.querySelector("#soppel_container3").addEventListener("animationiteration", resetSoppel);

  document.querySelector("#blad_container3").addEventListener("animationiteration", resetBlad);



  
}

function clickSoppel() {
  console.log("clickSoppel");

  document.querySelector("#soppel_container").removeEventListener("click", clickSoppel);

  // lyd

  point = point + 1;

  document.querySelector("#mine_points").textContent = point;

  document.querySelector("#soppel_container").classList.add("frys");

  document.querySelector("#flaske_sprite").classList.add("forsvind");

  document.querySelector("#soppel_container").addEventListener("animationend", resetSoppel);
}

function clickBlad() {
  console.log("clickBlad");


  document.querySelector("#blad_container").removeEventListener("click", clickBlad);
  document.querySelector("#blad_container2").removeEventListener("click", clickBlad);
  document.querySelector("#blad_container3").removeEventListener("click", clickBlad);



  liv = liv - 1;

  document.querySelector("#mine_liv").textContent = liv;

  if (liv <= 0) {
    endGame();
  }

  document.querySelector("#blad_container").classList.add("frys");


  document.querySelector("#blad1_sprite").classList.add("forsvind");


  document.querySelector("#blad_container").addEventListener("animationend", resetBlad);
}
function resetSoppel() {
  console.log("resetSoppel");

  document.querySelector("#soppel_container").classList = "";

  document.querySelector("#flaske_sprite").classList = "";
  document.querySelector("#soppel_container").offsetHeight;

  document.querySelector("#soppel_container").classList.add("fly");

  let rnd = generateRandomNumber(10);
  document.querySelector("#soppel_container").classList.add("pos" + rnd);

  rnd = generateRandomNumber(3);
  document.querySelector("#soppel_container").classList.add("speed" + rnd);

  document.querySelector("#soppel_container").addEventListener("click", clickSoppel);
}

function resetBlad() {
  console.log("resetBlad");

  document.querySelector("#blad_container").classList = "";
 
  document.querySelector("#blad1_sprite").classList = "";

 
  let rnd = generateRandomNumber(5);
  document.querySelector("#blad_container").classList.add("fly" + rnd);
  rnd = generateRandomNumber(2);
  document.querySelector("#blad_container").classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  document.querySelector("#blad_container").classList.add("delay" + rnd);

  document.querySelector("#blad_container").offsetHeight;
  document.querySelector("#blad_container").classList.add("fly");

  document.querySelector("#blad_container").addEventListener("click", clickBlad);
}

function endGame() {
  console.log("endGame");

  document.querySelector("#soppel_container").classList.remove("fly");
  document.querySelector("#blad_container").classList.remove("fly");

  document.querySelector("#soppel_container").removeEventListener("click", clickSoppel);
  document.querySelector("#blad_container").removeEventListener("click", clickBlad);

  
  document.querySelector("#soppel_container").removeEventListener("animationiteration", resetSoppel);
  
  document.querySelector("#blad_container").removeEventListener("animationiteration", resetBlad);

  document.querySelector("#soppel_container").removeEventListener("animationend", resetSoppel);
  document.querySelector("#blad_container").removeEventListener("animationend", resetBlad);

  document.querySelector("#soppel_container").removeEventListener("click", clickSoppel);
  document.querySelector("#blad_container").removeEventListener("click", clickBlad);

  if (liv <= 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("gameOver");

  document.querySelector("#sand").classList.remove("timer");

  document.querySelector("#sand").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#play_again_1").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");

  document.querySelector("#sand").classList.remove("timer");

  document.querySelector("#sand").removeEventListener("animationend", endGame);

  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#play_again_2").addEventListener("click", startGame);
}



function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;
}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
