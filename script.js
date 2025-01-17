let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genBotChoice = () => {
	const options = ["rock", "paper", "scissor"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
};

const drawGame = () => {
	msg.innerText = "Game was Draw! Play again.";
	msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin) {
		userScore++;
		userScorePara.innerText = userScore;
		msg.innerText = `You Win! Your ${userChoice} beats ${botChoice}`;
		msg.style.backgroundColor = "green";
	} else {
		botScore++;
		botScorePara.innerText = botScore;
		msg.innerText = `You Lose! ${botChoice} beats your ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
}

const playGame = (userChoice) => {

	const botChoice = genBotChoice();

	if(userChoice === botChoice){
		//Draw game
		drawGame();
	} else {
		let userWin = true;
		if(userChoice === "rock") {
			//scissor, paper
			userWin = botChoice === "paper" ? false : true;
		} else if(userChoice === "paper") {
			//rock, scissor
			userWin = botChoice === "scissor" ? false : true;
		} else{
			//rock, paper
			userWin = botChoice === "rock" ? false : true;
		}
		showWinner(userWin, userChoice, botChoice);
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
        playGame(userChoice);
	});
});