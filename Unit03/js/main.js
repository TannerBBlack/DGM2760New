document.querySelector('header > h1').innerText = "Guessing Game"
document.querySelector('header > h2').innerText ="Find the right number!"


let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
totalGuesses += 1 //increment the guesses of total Guesses
gamerGuess = document.querySelector('#guess').value

const feedback = document.querySelector('#feedback')

if (gamerGuess == correctNumber) {
    feedback.innerText = 'correct! Good job!'
    giveAward()
} else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'too high, try again'
} else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'too low, try again'
} else {
    feedback.innerText = 'Please choose a number between 1 and 15 and try again'
    totalGuesses -= 1
}

document.querySelector('#attempts').innerText = totalGuesses

}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blueRibbon.jpg'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'images/redRibbon.jpg'
            break;
        default:
            imagePath = 'images/yellowRibbon.png'
        
    }

    const awardImage = document.createElement('img')
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage)

    document.getElementById("guess").disabled = true;
    document.getElementById("myButton").disabled = true;

}

// function diableInput() {
//     <input disabled></input>
// }