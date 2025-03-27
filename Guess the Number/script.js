const guess = document.getElementById("guessInput")
const submitBtn = document.getElementById("submit")
const restartBtn = document.getElementById("restartBtn")
const message = document.getElementById("message")
let scoreDisplay = document.getElementById("score")
let score = 100;
let attempts = 0;
let userGuess;


let number = Math.floor(Math.random()*100);
console.log(number)

submitBtn.addEventListener("click", ()=>{
   userGuess = parseInt(guess.value);
    attempts++

    if(isNaN(userGuess) | userGuess < 1 | userGuess > 100){
        message.innerHTML = `<p>🧐 Please Enter a valid number</p`;
    }
     else if (userGuess === number) {
        message.innerHTML = `<p>🎉 Correct! You guessed the number</p>`;
    }
    else if(userGuess < number){
        message.innerHTML = `<p>📉 Too low! Try again.</p>`
        score -= 10
    }
    else{
        message.innerHTML = `<p>📈 Too high! Try again.</p>`
        score -= 10
    }

    scoreDisplay.textContent = score;

    if(score <= 0){
        message.innerHTML = `💀 Game Over! The number was ${randomNumber}.`
        submitBtn.disabled = true
    }
})

restartBtn.addEventListener("click", ()=>{
    let number = Math.floor(Math.random()*100);
    console.log(number)

    //clear input fild
    document.getElementById("guessInput").value = " ";

    //clear message box
    document.getElementById("message").innerHTML = " "
})

// restartBtn.addEventListener("click", ()=>{
//     let number = Math.floor(Math.random()*100);
//     console.log(number)

//     // Clear input field
//     document.getElementById("userInput").value = "";

//     // Clear messages
//     document.getElementById("message").innerHTML = "";

//     // Enable submit button
//     submitBtn.disabled = false;
// })
