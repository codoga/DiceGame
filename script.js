document.addEventListener("DOMContentLoaded", () => {
    const player1Dice = document.getElementById("player1-dice");
    const player2Dice = document.getElementById("player2-dice");
    const rollButton = document.getElementById("roll-button");
    const resultText = document.getElementById("result");
    const usernameInput = document.getElementById("username");
    const updateUsernameButton = document.getElementById("update-username");

    let username = "Player 1";

    const diceImages = [
        "dice1.png",
        "dice2.png",
        "dice3.png",
        "dice4.png",
        "dice5.png",
        "dice6.png"
    ];

    function rollDice() {
        rollButton.disabled = true;
        resultText.textContent = "Being thrown...";

        let player1Roll = Math.floor(Math.random() * 6) + 1;
        let player2Roll = Math.floor(Math.random() * 6) + 1;

        let animationInterval = setInterval(() => {
            let randomIndex1 = Math.floor(Math.random() * 6);
            let randomIndex2 = Math.floor(Math.random() * 6);
            player1Dice.src = diceImages[randomIndex1];
            player2Dice.src = diceImages[randomIndex2];
        }, 100);

        setTimeout(() => {
            clearInterval(animationInterval);
            player1Dice.src = diceImages[player1Roll - 1];
            player2Dice.src = diceImages[player2Roll - 1];

            if (player1Roll > player2Roll) {
                resultText.textContent = `${username} wins!`;
            } else if (player1Roll < player2Roll) {
                resultText.textContent = "Player 2 wins!";
            } else {
                resultText.textContent = "Draw!";
            }

            rollButton.disabled = false;
        }, 3000);
    }

    function updateUsername() {
        username = usernameInput.value || "Player 1";
        alert(`Player's name is updated: ${username}`);
    }

    rollButton.addEventListener("click", rollDice);
    updateUsernameButton.addEventListener("click", updateUsername);
});
