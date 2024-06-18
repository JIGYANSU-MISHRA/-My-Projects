let userScore = 0; //Set user score as 0
let compScore = 0; //Set computer score as 0

const choices = document.querySelectorAll(".choice"); //Access the choices
const msg = document.querySelector("#msg"); //Access the msg part

const userScorePara = document.querySelector("#user-score"); //Access the user score
const compScorePara = document.querySelector("#comp-score"); //Access the computer score

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; 
  const randIdx = Math.floor(Math.random() * 3); //To pick the random element
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game Draw. Play again.";
  msg.style.backgroundColor = "rgb(255, 101, 45)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++; //if user wins the point incremented
    userScorePara.innerText = userScore; //update the new score
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; //throw the msg if you win
    msg.style.backgroundColor = "green";
  } else {
    compScore++; //if comp wins the point incremented
    compScorePara.innerText = compScore; //update the new score
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; //throw the msg if you loose
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true; 
    if (userChoice === "rock") {
      //if user choose rock then comPuter choose scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice); //it shows the winner
  }
};


//To track the every click using event listener
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); //define the id
    playGame(userChoice);
  });
});