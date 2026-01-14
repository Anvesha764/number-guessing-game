const max = prompt("Enter the maximum number");
console.log(max);

const random = Math.floor(Math.random()*max) + 1;
console.log(random);

let guess = prompt("Guess the number");

while(true){
  if(guess == "quit") {
    console.log("user quit");
    break;
  }

  if(guess==random){
    console.log("You are right! Congrats!! Random number was",random);
    break;
  }else if(guess>random){
    guess = prompt("Hint : Your guess was too big. Please try again");
  }else if(guess<random){
    guess = prompt("Hint : Your guess was too small. Please try again");
  }
}
