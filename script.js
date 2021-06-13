let players = [];
let gameBoard = [];
let para = document.getElementById("turn");
let pc;
let table1 = [];
let table2 = [];
let table3 = [];
let p1 = 0;
let p2 = 0;
let roll;




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

  if (document.getElementById("computerPlay").checked) {
    for (let t = 0; t < 9; t++) {
      document.getElementById(t).setAttribute("onclick", "computerPlay(this.id)");
      //if (players[1].playerName == "") { players[1].playerName = "Stupid Pc"; };

    }
  }

  players.push({ playerName, playerMark });

  para.innerText = players[0].playerName + "'s turn!"

  document.getElementById("pregameContainer").style.visibility = "hidden";
  document.getElementById("startGame").style.visibility = "hidden";


}

//play function to play versus another player

function play(a) {

  if (players.length > 0) {




    if (p1 == p2) {

      document.getElementById(a).innerHTML = players[0].playerMark;

      gameBoard[Number(a)] = players[0].playerMark;

      para.innerText = players[1].playerName + "'s turn!";

      p1 += 1;

    }

    else if (p1 > p2) {

      document.getElementById(a).innerText = players[1].playerMark;

      gameBoard[Number(a)] = players[1].playerMark;

      para.innerText = players[0].playerName + "'s turn!";

      p2 += 1;

    }

    document.getElementById(a).setAttribute("onclick", "");
    tableMaker(a);

  }



}

function tableMaker(a) {

  if (p1 > p2) {

    if (a < 3) { (table1[0] == undefined) ? table1[0] = 1 : table1[0] = Number(table1[0]) + 1 }
    if (a > 2 && a < 6) { (table1[1] == undefined) ? table1[1] = 1 : table1[1] = Number(table1[1]) + 1 }
    if (a > 5 && a < 9) { (table1[2] == undefined) ? table1[2] = 1 : table1[2] = Number(table1[2]) + 1 }
    if (a % 3 == 0) { (table1[3] == undefined) ? table1[3] = 1 : table1[3] = Number(table1[3]) + 1 }
    if (a % 3 == 1) { (table1[4] == undefined) ? table1[4] = 1 : table1[4] = Number(table1[4]) + 1 }
    if (a % 3 == 2) { (table1[5] == undefined) ? table1[5] = 1 : table1[5] = Number(table1[5]) + 1 }
    if (a % 4 == 0) { (table1[6] == undefined) ? table1[6] = 1 : table1[6] = Number(table1[6]) + 1 }
    if (a % 2 == 0 && a > 1 && a < 8) { (table1[7] == undefined) ? table1[7] = 1 : table1[7] = Number(table1[7]) + 1 }
  }

  if (p1 == p2) {

    if (a < 3) { (table2[0] == undefined) ? table2[0] = 1 : table2[0] = Number(table2[0]) + 1 }
    if (a > 2 && a < 6) { (table2[1] == undefined) ? table2[1] = 1 : table2[1] = Number(table2[1]) + 1 }
    if (a > 5 && a < 9) { (table2[2] == undefined) ? table2[2] = 1 : table2[2] = Number(table2[2]) + 1 }
    if (a % 3 == 0) { (table2[3] == undefined) ? table2[3] = 1 : table2[3] = Number(table2[3]) + 1 }
    if (a % 3 == 1) { (table2[4] == undefined) ? table2[4] = 1 : table2[4] = Number(table2[4]) + 1 }
    if (a % 3 == 2) { (table2[5] == undefined) ? table2[5] = 1 : table2[5] = Number(table2[5]) + 1 }
    if (a % 4 == 0) { (table2[6] == undefined) ? table2[6] = 1 : table2[6] = Number(table2[6]) + 1 }
    if (a % 2 == 0 && a > 1 && a < 8) { (table2[7] == undefined) ? table2[7] = 1 : table2[7] = Number(table2[7]) + 1 }
  }

  if (table1.indexOf(3) >= 0) {
    para.innerText = (players[0].playerName + " won!");
    endGame();
  }

  if (table2.indexOf(3) >= 0) {
    para.innerText = (players[1].playerName + " won!");
    endGame();
  }


  draw()

}



function draw() {

  for (let i = 0; i < 8; i++) {

    table3[i] = table1[i] + table2[i]
  }

  function checker(num) {
    return num >= 2
  }

  if (table3.every(checker)) {
    para.innerText = ("Draw");
    endGame();
  }
}

function endGame() {


  document.getElementById("restart").style.visibility = "visible";
  document.getElementById("winner").innerText = para.innerText;

  for (let d = 0; d < 9; d++) {
    document.getElementById(d).setAttribute("onclick", "");
  }


}

function playAgain() {

  location.reload()
}

//function for playing against computer

function computerPlay(a) {

  document.getElementById(a).innerHTML = players[0].playerMark;

  gameBoard[Number(a)] = players[0].playerMark;

  para.innerText = players[1].playerName + "'s turn!";

  p1 += 1;

  tableMaker(a);

  document.getElementById(a).setAttribute("onclick", "");

  if (document.getElementById("restart").style.visibility != "visible") {

    setTimeout(pcP, 500);
  }

}

function pcP() {

  decider();

  p2 += 1;

  document.getElementById(a).innerText = players[1].playerMark;

  gameBoard[Number(a)] = players[1].playerMark;

  para.innerText = players[0].playerName + "'s turn!";

  tableMaker(a);

  document.getElementById(a).setAttribute("onclick", "");

  console.log(a);

  console.log(gameBoard)





}

function decider() {

  gameTable = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  roll = Math.floor(Math.random() * 8);




  if (table1.indexOf(2) >= 0) {

    let arr = table1.map((e, i) => e == 2 ? i : '').filter(String);

    console.log("dont lose")

    for (d = 0; d < arr.length; d++) {
      final = gameTable[arr[d]];
      //table1.splice(table1.indexOf[2],1);

      for (i = 0; i < 3; i++) {

        if (gameBoard[final[i]] == undefined) { roll = final[i] }
        //else {decider()}
      }
    }
  }
  if (table2.indexOf(2) >= 0) {

    let arr = table2.map((e, i) => e == 2 ? i : '').filter(String);
    console.log("win");


    for (d = 0; d < arr.length; d++) {
      final = gameTable[arr[d]];
      //table2.splice(table2.indexOf[2],1);

      for (i = 0; i < 3; i++) {

        if (gameBoard[final[i]] == undefined) { roll = final[i] }
        //else {decider()}
      }
    }
  }



  
    
    if (gameBoard[roll] == undefined) { a = roll }
    else decider()
  


}

