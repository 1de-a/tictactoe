let players = [];
let gameBoard = [];
let para = document.getElementById("turn");
let marker;
let p = 0;
let table1 = [];
let table2 = [];
let table3 = [];




// function that takes player names and marks then stores it in players array
// also hides the forms and start button when pressed
// starts game

function startGame() {


  playerName = document.getElementById("player1Name").value;

  var radios = document.getElementsByName("mark");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      playerMark = radios[i].value;
      break;
    }
  }

  players.push({ playerName, playerMark });

  playerName = document.getElementById("player2Name").value;
  (players[0].playerMark === "X") ? playerMark = "O" : playerMark = "X";

  players.push({ playerName, playerMark });

  para.innerText = players[0].playerName + "'s turn!"

  document.getElementById("pregameContainer").style.visibility = "hidden";
  document.getElementById("startGame").style.visibility = "hidden";

  //if (document.getElementById("computerPlay").checked) { computerplay() };



}

//play function to play versus another player

function play(a) {

  if (players.length > 0) {




    if (p % 2 == 0) {

      document.getElementById(a).innerHTML = players[0].playerMark;

      gameBoard[Number(a)] = players[0].playerMark;

      para.innerText = players[1].playerName + "'s turn!";

      winGame1(a);
      draw();

    }

    else if (p % 2 == 1) {

      document.getElementById(a).innerText = players[1].playerMark;

      gameBoard[Number(a)] = players[1].playerMark;

      para.innerText = players[0].playerName + "'s turn!";

      winGame2(a);
      draw();

    }

    document.getElementById(a).setAttribute("onclick", "");
    p += 1;



  }



}

function winGame1(a) {



  if (a < 3) { (table1[0] == undefined) ? table1[0] = 1 : table1[0] = Number(table1[0]) + 1 }
  if (a > 2 && a < 6) { (table1[1] == undefined) ? table1[1] = 1 : table1[1] = Number(table1[1]) + 1 }
  if (a > 5 && a < 9) { (table1[2] == undefined) ? table1[2] = 1 : table1[2] = Number(table1[2]) + 1 }
  if (a % 3 == 0) { (table1[3] == undefined) ? table1[3] = 1 : table1[3] = Number(table1[3]) + 1 }
  if (a % 3 == 1) { (table1[4] == undefined) ? table1[4] = 1 : table1[4] = Number(table1[4]) + 1 }
  if (a % 3 == 2) { (table1[5] == undefined) ? table1[5] = 1 : table1[5] = Number(table1[5]) + 1 }
  if (a % 4 == 0) { (table1[6] == undefined) ? table1[6] = 1 : table1[6] = Number(table1[6]) + 1 }
  if (a % 2 == 0 && a > 1 && a < 8) { (table1[7] == undefined) ? table1[7] = 1 : table1[7] = Number(table1[7]) + 1 }


  if (table1.indexOf(3) >= 0) { para.innerText = (players[0].playerName + " won!");
  endGame(); };


  



}

function winGame2(a) {



  if (a < 3) { (table2[0] == undefined) ? table2[0] = 1 : table2[0] = Number(table2[0]) + 1 }
  if (a > 2 && a < 6) { (table2[1] == undefined) ? table2[1] = 1 : table2[1] = Number(table2[1]) + 1 }
  if (a > 5 && a < 9) { (table2[2] == undefined) ? table2[2] = 1 : table2[2] = Number(table2[2]) + 1 }
  if (a % 3 == 0) { (table2[3] == undefined) ? table2[3] = 1 : table2[3] = Number(table2[3]) + 1 }
  if (a % 3 == 1) { (table2[4] == undefined) ? table2[4] = 1 : table2[4] = Number(table2[4]) + 1 }
  if (a % 3 == 2) { (table2[5] == undefined) ? table2[5] = 1 : table2[5] = Number(table2[5]) + 1 }
  if (a % 4 == 0) { (table2[6] == undefined) ? table2[6] = 1 : table2[6] = Number(table2[6]) + 1 }
  if (a % 2 == 0 && a > 1 && a < 8) { (table2[7] == undefined) ? table2[7] = 1 : table2[7] = Number(table2[7]) + 1 }


  if (table2.indexOf(3) >= 0) { para.innerText = (players[1].playerName + " won!");
  endGame(); };
  

  




}


function draw() {

  for (let i = 0; i < 8; i++) {

    table3[i] = table1[i] + table2[i]
  }

  function checker(num) {
    return num >= 2
  }

  if (table3.every(checker)) { para.innerText = ("Draw");
  endGame();
}}

function endGame() {


  document.getElementById("restart").style.visibility = "visible";
  document.getElementById("winner").innerText = para.innerText;

  for(let d=0;d<9;d++) {
  document.getElementById(d).setAttribute("onclick", "");}


}

function playAgain() {

  location.reload()
}