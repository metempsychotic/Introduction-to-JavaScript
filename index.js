/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;

if(votingAge > 18){
  console.log("true");
}else{
  console.log("false");
}

// returns false because instructions specifically say return true if age is greater than 18, not greater than or equal to. Tricky Brit. 

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let goodPerson = "yes";
let doYouLikeDogs = "no";

if(doYouLikeDogs = "no"){
  let goodPerson = "no";
  console.log(goodPerson);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let x = "1999";
parseInt(x);
console.log(x);

//Task d: Write a function to multiply a*b 

function multiply(a,b){
  return a*b; 
}

console.log(multiply(2,3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 38;
const dogYears = 7;

function dogAge(){
  return myAge*dogYears;
}

console.log(dogAge());

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(age, weight){
  if(age >= 1 && weight <= 10){
    return weight * .05;
  }else if(age >= 1 && weight >= 6 && weight <=10){
    return weight * .04;
  }else if(age >= 1 && weight >= 11 && weight <=15){
    return weight * .03;
  }else if(age >= 1 && weight > 15){
    return weight * .02;
  }else if(age < 0.333){
    return weight * .1;
  }else if(age < 0.583 && age >= 0.333){
    return weight * .05;
  }else if(age < 1 && age >= 0.583){
    return weight * .04;
  }else{
    return "error";
  }
}

console.log("Your dog requires " + dogFeeder(1,15) + "lbs of raw food.");





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computerChoice = Math.random();
if(computerChoice < 0.33){
  computerChoice = "rock";
}else if(computerChoice >= 0.34 && computerChoice < 0.66){
  computerChoice = "paper";
}else if(computerChoice >= 0.66){
  computerChoice = "scissors";
}

function rockPaperScissors(playerChoice){
  if(playerChoice === "rock" && computerChoice === "rock"){
    return "you tied";
  }else if(playerChoice === "rock" && computerChoice === "paper"){
    return "you lost";
  }else if(playerChoice === "rock" && computerChoice === "scissors"){
    return "you won";
  }else if(playerChoice === "paper" && computerChoice === "rock"){
    return "you won";
  }else if(playerChoice === "paper" && computerChoice === "paper"){
    return "you tied";
  }else if(playerChoice === "paper" && computerChoice === "scissors"){
    return "you lost";
  }else if(playerChoice === "scissors" && computerChoice === "rock"){
    return "you lost";
  }else if(playerChoice === "scissors" && computerChoice === "paper"){
    return "you won";
  }else if(playerChoice === "scissors" && computerChoice === "scissors"){
    return "you tied";
  }
}

console.log(rockPaperScissors("rock"));




  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function milesToKilometers(miles){
  return miles * 1.60934;
}

console.log(milesToKilometers(20));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCentimeters(feet){
  return feet * 30.48;
}

console.log(feetToCentimeters(20));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
  for (soda=num; soda>=1; soda--)
          console.log(soda + " bottles of soda on the wall, " + soda + " bottles of soda. Take one down and pass it around, " + (soda-1) + " bottles of soda on the wall.");
}

console.log(annoyingSong(99));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(num){
  if(num >= 90){
    return "A";
  }else if(num < 90 && num >=80){
    return "B";
  }else if(num < 80 && num >=70){
    return "C";
  }else if(num < 70 && num >=60){
    return "D";
  }else if(num < 60){
    return "F";
  }
}

console.log(grade(98));
  
  /************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

//couldn't really figure out a way to implement the .includes() method, but managed a working function anyway. :)

function vowelCount(str){
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (var i = 0; i < str.length; i++){
    if(vowels.indexOf(str[i]) > -1){
      count++;
    }
  }

  return "This string contains " + count + " vowels.";
}

console.log(vowelCount("I wonder how many vowels are in this string..."));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object







