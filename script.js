let Roll = 0

function roll() {
    Roll = Math.floor(Math.random() * 20) + 1;
    
    // alert('hi')
    displayScore()
}

function displayScore() {
    document.getElementById('roll').innerHTML = Roll
}

function reset() {
    document.getElementById('roll').innerHTML = '0'
    Roll1 = 0
}