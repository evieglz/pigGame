init();

var scores;
var roundScores;
var activePlayer;
var gamePlaying;
var rules;

document.querySelector(".btn-rollDice").addEventListener("click",function(){
    // adding the 1, allows this to not have a 0
    var dice1= Math.floor(Math.random()*6)+1;
    var dice2= Math.floor(Math.random()*6) +1;

    console.log(dice1);
    console.log(dice2);

    // display the results for the dice
    document.getElementById("dice1").style.display="block";
    document.getElementById("dice2").style.display="block";
    document.getElementById("dice1").src='dice-' + dice1 +".png";
    document.getElementById("dice2").src='dice-' + dice2 +".png";

    // Update the round score 
  if (dice1 !==1 && dice2 !== 1){
      roundScores += dice1 + dice2; 
      document.querySelector("#current" + activePlayer).textContent = roundScores
  }
  else{
      nextPlayer();
  }
});


document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
        scores[activePlayer] += roundScores;

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector(".goal").nodeValue;
        var winningScore;

        if (input){
            winningScore = input;
        }
        else{
            winningScore = 10;
        }  

        
        if (scores[activePlayer] >= winningScore){
            document.querySelector ("#player-" + activePlayer).textContent = "WINNER!!";
            
            document.querySelector(".player-" + activePlayer + '-panel').classList.remove("active");
            gamePlaying=false;
        }
        else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ?
    activePlayer =1 : activePlayer =0;
    roundScores =0;

    document.getElementById("current-1").textContent = 0;
    document.getElementById("current-2").textContent = 0;

    document.querySelector(".player1-panel").classList.toggle("active");
    document.querySelector(".player2-panel").classList.toggle("active");
}

document.querySelector(".btn-newGame").addEventListener("click", init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScores=0;
    gamePlaying= true;



    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('player-1').textContent = 'Player 1';
    document.getElementById('player-2').textContent = 'Player 2';
    document.querySelector('.player1-panel').classList.remove('winner');
    document.querySelector('.player2-panel').classList.remove('winner');
    document.querySelector('.player1-panel').classList.remove('active');
    document.querySelector('.player2-panel').classList.remove('active');
    document.querySelector('.player1-panel').classList.add('active');

}

document.querySelector('.btn-rules').addEventListener("click", function(){
    rules = alert("Rules of the game: A player losses his Entire score when they roll two 6 in a row");
})

