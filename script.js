console.log("Rock Paper Scissors");
let choice3;
let human_score = 0;
let comp_score = 0;
// let choice_comp , choice_human;
//function for Computer choice

function getComputerchoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return choice;

}

// function for Human Choice

function getHumanchoice() {
    let choice2 = window.prompt("choose : ROCK PAPER SCISSOR");
    if (choice2.toUpperCase() === "ROCK") {
        choice3 = 1;
    } else if (choice2.toUpperCase() === "PAPER") {
        choice3 = 2;
    } else if (choice2.toUpperCase() === "SCISSOR") {
        choice3 = 3;
    }
    return choice3 ;
}

let choice_comp = getComputerchoice(1, 4);
let choice_human = getHumanchoice();

//Play game function
function playGame() {
    //PLayRound

    function playRound(h_choice, c_choice) {
        if (h_choice == 1 && c_choice == 3 || h_choice == 3 && c_choice == 1) {
            if (h_choice == 1 && c_choice == 3) {
                human_score += 1;
            } else {
                comp_score += 1;
            }
        } else if (h_choice > c_choice) {
            if (h_choice > c_choice) {
                human_score += 1;
            } else {
                comp_score += 1;
            }
        } else if (h_choice === c_choice) {
            human_score += 0;
            comp_score += 0;
        }
        
     return;   
    }
    

    // console.log(choice_human, choice_comp);

    console.log(playRound(choice_human, choice_comp));

    return;
}


console.log(playGame());

console.log("Human Score" &human_score);
console.log("Computer Score" &comp_score);

