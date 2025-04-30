function main(userChoice) {
    
    let userScore = parseInt(document.getElementById("user-score").innerText);
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    
    console.log("\nNEW ROUND")
    console.log(`Start of game - userScore is: ${userScore}`);
    console.log(`Start of game - computerScore is: ${computerScore}`);

    // validate user selection
    if (userChoice !== "rock" | userChoice !== "paper" | userChoice !== "scissor") {
        console.log(`Error - userChoice is an unexpected value: ${userChoice}`);
        // look up how to exit function
    }

    // computer selection
    const options = ["rock", "paper", "scissor"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    // determine winner
    const results = JSON.stringify({ userChoice, computerChoice });

    switch (results) {
        case JSON.stringify({ userChoice: "rock", computerChoice: "paper" }):
            winner = "computer";
            mainMsg = "You lose!";
            subMsg = "Rock wraps up paper.";
            break;
        case JSON.stringify({ userChoice: "paper", computerChoice: "rock" }):
            winner = "user";
            mainMsg = "You win!";
            subMsg = "Rock wraps up paper.";
            break;
        case JSON.stringify({ userChoice: "scissor", computerChoice: "paper" }):
            winner = "user";
            mainMsg = "You win!";
            subMsg = "Scissor cuts through paper.";
            break;
        case JSON.stringify({ userChoice: "paper", computerChoice: "scissor" }):
            winner = "computer";
            mainMsg = "You lose!";
            subMsg = "Scissor cuts through paper.";
            break;
        case JSON.stringify({ userChoice: "rock", computerChoice: "scissor" }):
            winner = "user";
            mainMsg = "You win!";
            subMsg = "Rock crushes scissor.";
            break;
        case JSON.stringify({ userChoice: "scissor", computerChoice: "rock" }):
            winner = "computer";
            mainMsg = "You lose!";
            subMsg = "Rock crushes scissor.";
            break;
        default:
            winner = "nobody";
            mainMsg = "Draw";
            subMsg = `You both selected: ${userChoice}.`
        }
    
    // update user score
    if (winner == "user") {
        userScore++;
        document.getElementById('user-score').innerText = userScore;
    } else if (winner == "computer") {
        computerScore++;
        document.getElementById('computer-score').innerText = computerScore;
    } else {
        console.log("Draw");
    }

    document.getElementById('main-message').innerText = mainMsg;
    document.getElementById('sub-message').innerText = subMsg;
    setImage("user", userChoice);
    setImage("computer", computerChoice);

    console.log(`Current score is - User: ${userScore} | Computer: ${computerScore}`);

    // check if player has won game
    if (userScore == 5) {
        endGame("User", userScore, computerScore);
        resetGame();
    }

    if (computerScore == 5) {
        endGame("Computer", userScore, computerScore);
        resetGame();
    }
    
}

function resetGame() {
    document.getElementById('main-message').innerText = "Let's get started!";
    document.getElementById('sub-message').innerText = "First person to 5 points wins the game";
    document.getElementById('user-score').innerText = 0
    document.getElementById('computer-score').innerText = 0
    document.getElementById('user-choice').innerText = "😎"
    document.getElementById('computer-choice').innerText = "🤖"
}

function setImage(playerType, choice) {

    switch (choice) {
        case "rock":
            choiceEmoji = "✊";
            break;
        case "paper":
            choiceEmoji = "✋";
            break;
        
        case "scissor":
            choiceEmoji = "✌️";
            break;
        default:
            choiceEmoji = "⁉️"
    }   

    if (playerType == "user") {
        document.getElementById('user-choice').innerText = choiceEmoji;       
    } else if (playerType == "computer") {
        document.getElementById('computer-choice').innerText = choiceEmoji;
    } else {
        console.log(`Error - Unknown player type: ${playerType}`);
    }

}

function endGame(winner, userScore, computerScore) {

    let endGameModal = document.getElementById('end-game-modal');

    if (winner == "User") {
        document.getElementById('modal-main-text').innerText = "Victorious! 😎";
        document.getElementById('modal-secondary-text').innerText = `You have won! Final score: ${userScore} vs. ${computerScore}`;
        endGameModal.classList.add('active');
    } else if (winner == "Computer") {
        document.getElementById('modal-main-text').innerText = "Defeat! 🤖";
        document.getElementById('modal-secondary-text').innerText = `You have lost! Final score: ${userScore} vs. ${computerScore}`;
        endGameModal.classList.add('active');
    }

}

function closeModal() {

    let endGameModal = document.getElementById('end-game-modal');

    endGameModal.classList.remove('active');

}