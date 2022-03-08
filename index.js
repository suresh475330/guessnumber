let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");

let result = Math.floor(Math.random()*10+1);
let num_of_guess = 0;
let guesses_num = [];

//console.log(result);

function play(){
   let userguess = document.querySelector("#guess").value;

   if(userguess < 1 || userguess > 10){
       alert("Enter number 1 to 10")
   }
   else{
       guesses_num.push(userguess)
       num_of_guess = num_of_guess + 1;
       if(userguess < result){
           msg1.textContent = `Your Guess Is Low`;
           msg2.textContent = `Number of Guess : ${num_of_guess} `;
           msg3.textContent = `Guessed Number are : ${guesses_num}`;
       }
       else if(userguess > result){
        msg1.textContent = `Your Guess Is High`;
        msg2.textContent = `Number of Guess : ${num_of_guess} `;
        msg3.textContent = `Guessed Number are : ${guesses_num}`;
    }
    else if(userguess == result){
        msg1.textContent = `Congratulation You won`;
        msg2.textContent = `The Number Is : ${result}`;
        msg3.textContent = `You Guessed : ${num_of_guess} Guesses`;
    }
   }
   
};

document.querySelector("#guess").focus();

// ----- cookies

let cookie = document.querySelector(".cookie");
let button = document.querySelector(".btn2");

button.addEventListener("click",()=>{
    cookie.classList.remove("active");
    localStorage.setItem("Accpet",true);
})

setTimeout(()=>{
    if(!localStorage.getItem("Accpet")){
        cookie.classList.add("active");
    }
},2000)
