let user = 0;
let computer = 0;
const user_Lavel = document.querySelector("#User-Score");
const computer_Lavel = document.querySelector("#Computer-Score");
const Score_board = document.querySelector(".Score-Board");
const Result_div_p = document.querySelector(".Result p");
const Rock = document.querySelector("#r");
const Paper = document.querySelector("#p");
const Scissor = document.querySelector("#s");

function getResultbyComputer()
{
	const Choice = ["r","p","s"];
    const userchoive = (Math.floor(Math.random() * 3));
    return Choice[userchoive];
}

function toconvertAword(Word)
{
	if(Word == "r")
	{
		return "Rock";
	}
	if(Word == "p")
	{
		return "Paper";
	}
	return "Scissors";
}

function Win(UserChoice, comuterChoice)
{
	const smallUser = "user".fontsize(3).sub();
    const smallcomputer = "comp".fontsize(3).sub();
    const user_choice_div = document.getElementById(UserChoice);
    user++;
    user_Lavel.innerHTML = user;
    computer_Lavel.innerHTML = computer;
    Result_div_p.innerHTML = `${toconvertAword(UserChoice)}${smallUser} beats ${toconvertAword(comuterChoice)}${smallcomputer}.You Win!`;
    user_choice_div.classList.add('green-glow');
    setTimeout(() => user_choice_div.classList.remove('green-glow'),300);
}

function Loose(UserChoice, comuterChoice)
{
	const smallUser = "user".fontsize(3).sub();
    const smallcomputer = "comp".fontsize(3).sub();
    const user_choice_div = document.getElementById(UserChoice);
	computer++;
    user_Lavel.innerHTML = user;
    computer_Lavel.innerHTML = computer;
    Result_div_p.innerHTML = `${toconvertAword(UserChoice)}${smallUser} loos to ${toconvertAword(comuterChoice)}${smallcomputer}.You Lost!`;
    user_choice_div.classList.add('red-glow');
    setTimeout(() => user_choice_div.classList.remove('red-glow'),300);
}

function Draw(UserChoice, comuterChoice)
{
    const smallUser = "user".fontsize(3).sub();
    const smallcomputer = "comp".fontsize(3).sub();
    const user_choice_div = document.getElementById(UserChoice);
    Result_div_p.innerHTML = `${toconvertAword(UserChoice)}${smallUser} equal ${toconvertAword(comuterChoice)}${smallcomputer}.You draw!`;
    user_choice_div.classList.add('blue-glow');
    setTimeout(() => user_choice_div.classList.remove('blue-glow'),300);
}

function game(UserChoice)
{
    const comuterChoice = getResultbyComputer();
    console.log("User choice : " + UserChoice);
    console.log("Computer choice : " + comuterChoice);
    switch(UserChoice + comuterChoice)
    {
    	case "rs":
    	case "pr":
    	case "sp":
    	Win(UserChoice, comuterChoice);
    	break;
    	case "rp":
    	case "ps":
    	case "sr":
        Loose(UserChoice, comuterChoice);
    	break;
    	case "rr":
    	case "pp":
    	case "ss":
    	Draw(UserChoice, comuterChoice);
    	break;
    }
}


function Main ()
{
    Rock.addEventListener("click", () => game("r"));
    Paper.addEventListener("click", () => game("p"));
    Scissor.addEventListener("click", () => game("s"));
}
Main();