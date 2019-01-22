/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore, activePlayer, winnigScore = 20, gamePlaying;

//We initialize the variables and hide stuff
init();

var special = document.createElement('special');
special.setAttribute('class', 'boss');
special.textContent = 'an here we go';
document.body.appendChild(special);


var node = document.createElement('H4');
var textnode = document.createTextNode("Here we go!");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.querySelector('.body').appendChild(node);

/* Select the first elem with that id, change the text

document.querySelector('#current-' + activePlayer).textContent = dice;
*/


/* Now lets modify some HTML. Always pass over as string

document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' 
*/

/* Reading from HTML

var x = document.querySelector('#score-0').textContent;
console.log(x);
*/

/* Changing CSS
- style selects CSS
- next select atribute, in our case display

document.querySelector('.dice').style.display = 'none';
*/

/***************************
* We set all scores to 0 to begin with
*/
function init(){
    scores = [0,0];
    roundscore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // Udefined, 0, null, or "" are COERCED to false!
    winnigScore = (document.querySelector('.final-score').value) ? document.querySelector('.final-score').value : 20;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    // Remove and add so that we do not wake up with 2 active classes on player-0
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


/********************************
* Events are notificatios a page sends: clicks, button presses, resizing windows, scrolling
* We can use event listeners to respond to such event. Is a function that waits for a specific event and then executes
* The execution stack must be empty before an event is handled
*/

/*
Here we update the face of the dice in the middle of the page
*/
function btn() {
    //Do smth here
}

//document.querySelector('.btn-roll').addEventListener('click', btn);
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
    //Anonymous function definition
    // 1. Rand num
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    // 2. Display the result
    var dice1DOM = document.querySelector('#dice-1');
    var dice2DOM = document.querySelector('#dice-2');
    dice1DOM.style.display = 'block';
    dice2DOM.style.display = 'block';
    dice1DOM.src = 'dice-' + dice1 + '.png';
    dice2DOM.src = 'dice-' + dice2 + '.png';
    // 3. Update round score if != 1
    if(dice1 !== 1 && dice2 !== 1){
        roundscore += dice1 + dice2;
        document.getElementById('current-' + activePlayer).textContent = roundscore;
    }
    else{
        nextPlayer();
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
    // Add current score to global score
    scores[activePlayer] += roundscore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if game is over
    if(scores[activePlayer] >= winnigScore){
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;
    }
    else{
        // Change player
        nextPlayer();
    }
    }
});

/***********
* Setup new game
*/
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundscore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundscore;
    /* Change highlighting
    * - Old way:
    * document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    * document.querySelector('.player-' + (1 - activePlayer) + '-panel').classList.add('active');
    */
    activePlayer = 1 - activePlayer;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}