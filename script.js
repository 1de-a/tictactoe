let players = [];
let gameBoard =[];
let para = document.getElementById("turn");
let marker;
let p=0;



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
    
    players.push({playerName,playerMark});

    playerName = document.getElementById("player2Name").value;
    (players[0].playerMark === "X") ? playerMark = "O" : playerMark = "X";

    players.push({playerName,playerMark});

    para.innerText = players[0].playerName + "'s turn!"
 
    document.getElementById("pregameContainer").style.visibility = "hidden";
    document.getElementById("startGame").style.visibility = "hidden";
    
   //if (document.getElementById("computerPlay").checked) { computerplay() };
 
    

 }

 //play function to play versus another player

 function play(a) {

    if (players.length > 0) {

        //endGame();
        

       if(p%2==0) {

        document.getElementById(a).innerHTML = players[0].playerMark;

        gameBoard[Number(a)] = players[0].playerMark;

        para.innerText = players[1].playerName + "'s turn!"

       }

       else if (p%2==1) {

        document.getElementById(a).innerText = players[1].playerMark;

        gameBoard[Number(a)] = players[1].playerMark;

        para.innerText = players[0].playerName + "'s turn!"

       }

       document.getElementById(a).setAttribute("onclick","");
       p+=1;
       
    
    }



 }

 