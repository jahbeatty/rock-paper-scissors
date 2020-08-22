/* =========== Initial Variables =========== */
const rock = 0;
const paper = 1;
const scissors = 2;
let score = 0;
let com_score = 0;

/* =========== Score Elements =========== */
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorBtn = document.querySelector('#scissors');

const container = document.querySelector('.container');
const selections = document.querySelector('.selections');
const your_score = document.createElement('div');
const their_score = document.createElement('div');
const result = document.createElement('div');
const match = document.createElement('div');
const play_again = document.createElement('button');
const h1 = document.createElement('h1');

match.textContent = `Select a weapon to begin`;
your_score.textContent = `Your Score: 0`;
their_score.textContent = `Computer Score: 0`;
play_again.textContent = `Play Again`;
h1.textContent = `Rock Paper Scissors | First to 5`;
play_again.setAttribute("id", "playAgain")

match.style.cssText = "font-size:20px; text-align:center";
your_score.style.cssText = "font-size:20px; text-align:center";
their_score.style.cssText = "font-size:20px; text-align:center";
result.style.cssText = "font-size:20px; text-align:center";
play_again.style.cssText = `
border: .4rem solid black;margin: 5px;
border-width: 2px;
border-radius: .5rem;
font-size: 1.5rem;
padding: 1rem 1rem;
margin: 2rem;
width: 10rem;
height: auto;
text-align: center;
color: white;
background-color: rgb(177, 177, 161);
text-shadow: 0 0 .5rem black;
margin-items: center`;

container.insertBefore(h1,selections);
container.appendChild(match)
container.appendChild(your_score);
container.appendChild(their_score);
container.appendChild(result);
container.appendChild(play_again);
/* =========== Game Functions =========== */
function computerPlay(){
    min = Math.ceil(0);
    max = Math.floor(3);
    com_response = Math.floor(Math.random() * (max - min)) + min;
    return com_response;
}

function playerSelection(response) {
    if(response.toLowerCase().localeCompare("rock") == 0 ){
        return rock;
    } else if(response.toLowerCase().localeCompare("paper") == 0 ){
        return paper;
    } else if(response.toLowerCase().localeCompare("scissors") == 0 ){
        return scissors;
    }
}

function playRound(player_response, com_response){
    function translation(input) {
        if(input == rock){
            return "Rock";
        }
        if(input == paper){
            return "Paper";
        }
        if(input == scissors){
            return "Scissors";
        }
    }
    if( (player_response == 0 && com_response == 2) || 
        (player_response == 1 && com_response == 0) ||
        (player_response == 2 && com_response == 1)){
        match.textContent = `You Win - ${translation(player_response)} beats ${translation(com_response)}`;
        score++;
        return 1;
    } else if(player_response == com_response){
        match.textContent = `Tie Game`;
        return 0;
    } else{
        match.textContent = `Computer Wins - ${translation(com_response)} beats ${translation(player_response)}`;
        com_score++;
        return -1;
    }
}
 
/* =========== Button Listeners =========== */
rockBtn.addEventListener('click', () =>{
    if(score < 5 && com_score < 5){
        const com_response = computerPlay();
        const player_response = playerSelection('rock');
        playRound(player_response,com_response);
        your_score.textContent = `Your Score: ${score}`;
        their_score.textContent = `Computer Score: ${com_score}`;
    }
    console.log(score);
    if(score === 5){
        result.textContent = "YOU WIN! GAME OVER";
    } else if(com_score === 5){
        result.textContent = "YOU LOSE! GAME OVER";
    }
});

paperBtn.addEventListener('click', () =>{
    if(score < 5 && com_score < 5){
        const com_response = computerPlay();
        const player_response = playerSelection('paper');
        playRound(player_response,com_response);
        your_score.textContent = `Your Score: ${score}`;
        their_score.textContent = `Computer Score: ${com_score}`;
    }
    console.log(score);
    if(score === 5){
        result.textContent = "YOU WIN! GAME OVER";
    } else if(com_score === 5){
        result.textContent = "YOU LOSE! GAME OVER";
    }
});

scissorBtn.addEventListener('click', () =>{
    if(score < 5 && com_score < 5){
        const com_response = computerPlay();
        const player_response = playerSelection('scissors');
        playRound(player_response,com_response);
        your_score.textContent = `Your Score: ${score}`;
        their_score.textContent = `Computer Score: ${com_score}`;
    }
    console.log(score);
    if(score === 5){
        result.textContent = "YOU WIN! GAME OVER";
    } else if(com_score === 5){
        result.textContent = "YOU LOSE! GAME OVER";
    }
});

play_again.addEventListener('click', () =>{
    match.textContent = `Select a weapon to begin`;
    score = 0;
    com_score = 0;
    your_score.textContent = `Your Score: ${score}`;
    their_score.textContent = `Computer Score: ${com_score}`;
    result.textContent = "";
});
