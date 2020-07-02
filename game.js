// variables
let scores, roundScore, activePlayer, gamePlaying;



reset();

function reset(){
    gamePlaying = true;
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    //display dice image to none
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}


// roll dice button function
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    // 1. Random number 
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. display the result
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'img/'+ dice + '.png';
    //3. update the round score If the rolled number was not 1 
    if(dice !== 1){
        //add score 
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next player
        nextPlayer();
    }
    }
});

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}



document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
           //add curent score to global score;
        scores[activePlayer] += roundScore;
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if player won the game if not nextplayer
        if(scores[activePlayer] >= 20){
        document.getElementById('name-'+ activePlayer).textContent = 'Winner!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        // aq davamateb winner class romelsac eqneba box-shadow 
        gamePlaying = false;
    }else {
        nextPlayer();
    }
    }

});

document.querySelector('.btn-new').addEventListener('click', reset);









//wvdeba Current-s da anichebs dice mnishvnelobas
//anu nebismier gagorebaze current = dice random
//mnishvnelobas activePlayer ki cvlis labels

// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
