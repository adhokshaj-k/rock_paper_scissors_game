console.log("Rock Paper Scissors");


let human_score = 0;
let comp_score = 0;


function getComputerchoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let choice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return choice;
}


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


function playRound(h_choice, c_choice) {
    if (h_choice == 1 && c_choice == 3 || h_choice == 3 && c_choice == 1) {
        if (h_choice == 1 && c_choice == 3) {
            human_score ++;
        } else {
            comp_score ++;
        }
    } else if (h_choice > c_choice) {
        if (h_choice > c_choice) {
            human_score ++;
        } else {
            comp_score ++;
        }
    } else if (h_choice === c_choice) {
        console.log ("DRAW DAMMIT")
    }

    return;
}
function playGame() {
    const choice_comp = getComputerchoice(1, 4);
    const choice_human = getHumanchoice();

    console.log(choice_comp, choice_human)



    return playRound(choice_human, choice_comp);
}

 while (human_score <= 3 && comp_score <= 3) {
    console.log(playGame());
 }


console.log("humanscore:" + human_score);
console.log("compute score:" + comp_score);

if (human_score===3) {
    console.log("you won")
} else {
    console.log("how you gonna live with this failure");
}

