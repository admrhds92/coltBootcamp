const p1 = {
    score: 0,
    button: document.querySelector('#player1Button'),
    display: document.querySelector('#player1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player2Button'),
    display: document.querySelector('#player2Display')
}


// const p1Button = document.querySelector('#player1Button')
// const p2Button = document.querySelector('#player2Button')
// const p1Display = document.querySelector('#player1Display')
// const p2Display = document.querySelector('#player2Display')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent) {
    if(!isGameOver){
        player.score += 1;
    }
    if (player.score === winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true
        opponent.button.disabled = true
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = p.score
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}