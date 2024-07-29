console.log("Rock Paper Scissors");


let human_score = 0;
let comp_score = 0;

//function for genrating computer choice;
function getComputerchoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return choice;
}

//function for getting human choice;
function getHumanchoice() {
    let choice2 = prompt("choose ROCK PAPER SCISSOR");
    let choice3;
    if (choice2.toLowerCase() === "rock") {
        choice3 = 1;
    } else if (choice2.toLowerCase() === "paper") {
        choice3 = 2;
    } else if (choice2.toLowerCase() === "scissor") {
        choice3 = 3;
    } else {
        alert("holy sh**t you can't even choose");
    }
    return choice3;
}

//main algorithem for the game;

function playRound(h_choice, c_choice) {
    // console.log(h_choice,c_choice);
   let m=h_choice+c_choice+h_choice;
//    console.log(m);
//    for printing the choice;    
    let choice_no_h=h_choice;
    let choice_human_print;
    switch (choice_no_h) {
        case 1:
            choice_human_print="Rock";
            break;
        case 2:
            choice_human_print="Paper";
            break;
        case 3:
            choice_human_print="Scissor";
            break;
    
        default:
            console.log("Invalid Argument")
            break;
    }

    let choice_no_c=c_choice;
    let choice_computer_print;
    switch (choice_no_c) {
        case 1:
            choice_computer_print="Rock";
            break;
        case 2:
            choice_computer_print="Paper";
            break;
        case 3:
            choice_computer_print="Scissor";
            break;
    
        default:
            console.log("Invalid Argument")
            break;
    }

console.log("You choose "+choice_human_print+"|| Computer choose "+choice_computer_print);

//main start here;
    switch (m){
        //for draw;
        case 3:
            console.log("Draw");
            break;
        case 6:
            console.log("Draw");
            break;
        case 9:
            console.log("Draw");
            break;
        //for human wins;
        case 5 :
            console.log("You won the round");
            human_score = human_score +1;
            break ;
        case 8 :
            console.log("You won the round");
            human_score = human_score +1;
            break ;
        // for computer wins;
        case 4:
            console.log("Computer won the round");
            comp_score = comp_score + 1;
            break;
        case 7:
            console.log("Computer won the round");
            comp_score = comp_score + 1;
            break;
        default:
            console.log("you are fu**ed");
            break;
    }
    
}

//function for playing the game;
function playGame() {
    const choice_comp = getComputerchoice(1, 4);
    const choice_human = getHumanchoice();

    if (human_score===5 || comp_score===5) {
        console.log("game complete");
    }
     else {
        playRound(choice_human, choice_comp);
        playGame();
    }

    return;
}

//calling playGame function
playGame();

console.log("Your Score:" +human_score);
console.log("Computer Score:" +comp_score);

if (human_score===5) {
    console.log("You won the game !!!!!");
} else if (comp_score===3) {
    console.log("Computer won the game");
    console.log("Game Over");
}

