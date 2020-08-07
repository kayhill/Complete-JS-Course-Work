 
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

*/


var scores, roundScore, activePlayer, gamePlaying, previousRoll, points;

init();

document.getElementById('pointSubmit').addEventListener('click', function(){
    points = document.getElementById('points').value;
    document.querySelector('.game-points').style.display = 'none';
    document.querySelector('.play-to').style.display = 'block';
    document.getElementById('play-to-span').textContent = points;
})

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    // Random number
        var dice = Math.floor((Math.random() * 6) + 1);
        console.log(dice);
    // Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    // Update current score if number not 1
        if (dice !== 1) {
            
            //check if two 6's 
            if (dice === 6) {
                if (dice === previousRoll) {
                    // zero total and round scores
                    roundScore = 0;
                    scores[activePlayer] = 0;
                    // Update UI
                    document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
                    console.log(previousRoll);
                    nextPlayer();
                } else {
                    //Update and display score
                    roundScore += dice;
                    previousRoll = dice;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }
            } else {
            //Update and display score
                roundScore += dice;
                previousRoll = dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to total score
        scores[activePlayer] += roundScore;
        // Update UI
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
        // Check if player won the game 
        if (scores[activePlayer] >= points) {
            document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }       
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // Zero round score
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // change active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //hide dice
    document.querySelector('.dice').style.display = 'none';

}

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.game-points').style.display = 'block';
    document.querySelector('.play-to').style.display ='none';

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

