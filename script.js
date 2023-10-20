let [computer_score, player_score] = [0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
    "rock": {
        "rock": "draw",
        "scissors": "win",
        "paper": "lose"

    },
    "paper": {
        "rock": "win",
        "scissors": "lose", 
        "paper": "draw"
    },
    "scissors": {
        "rock": "lose",
        "scissors": "draw",
        "paper": "win"
    }
}

function checker(input) {
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random() * 3);

    document.getElementById("computer_choice").innerHTML = `Computer choose <span> ${choices[num].toUpperCase()}</span>`;

    document.getElementById("player_choice").innerHTML = `You choose <span> ${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]) {
        case "win":
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "You win!";
            player_score++;
            break;
        case "lose":
            result_ref.style.cssText = "background-color: #f8d7da; color: #721c24";
            result_ref.innerHTML = "You lose!";
            computer_score++;
            break;
        case "draw":
            result_ref.style.cssText = "background-color: #d4edda; color: #155724";
            result_ref.innerHTML = "Draw!";
            break;
        default:
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("player_score").innerHTML = player_score;

}