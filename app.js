let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

// creating function to Generating the computer choice
const generateCompChoice=()=>{
   let options=["rock","paper","scissor"];
   const randomIdx=Math.floor(Math.random()*3);
   return options[randomIdx]; 
};

const drawGame=()=>{
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
    }    
    else{
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
        compScore++;
    }
    // updating user score and computer score
    document.querySelector(".user-score").innerText=userScore;
    document.querySelector(".comp-score").innerText=compScore;
}

const playGame=(userChoice)=>{
     // generate computer choice
    const compChoice= generateCompChoice();

    // identifying winner
    if(userChoice===compChoice){
        drawGame();
    } else{
        let userWin=true;  //suppose user win for curent choice
        if(userChoice==="rock")
            userWin = (compChoice==="paper" ? false :true);  // ternary operator
        else if(userChoice ==="paper")
            userWin = (compChoice==="scissor" ? false : true);
        else{
            userWin = (compChoice==="rock" ? false : true);
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

// tracking the user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    }); 
});