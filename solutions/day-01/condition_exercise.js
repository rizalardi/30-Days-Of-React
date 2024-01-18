let input = prompt("How old are you ?")
if(input >= 18){
    console.log("You are allowed to drive")
}else {
    console.log('You are',18 - input,'years younger to be allowed to drive')
}

let myAge = 25;
if(myAge > input){
    console.log("I'm", myAge - input,"years older than you")
}else if(myAge === input){
    console.log("We are the same age")
}else{
    console.log("I'm", input - myAge,"years younger than you")
}

let a = 4;
let b = 3;

if(a > b){
    console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}

a > b ? console.log('b is less than a') : console.log('a is less than b')

input % 2 === 0 ? console.log(input, "is an even number") : console.log(input, "is an odd number")

switch (true) {
    case (input >= 80):
        console.log("Your grade is A");
        break;
    case (input >= 70 && input < 80):
        console.log("Your grade is B");
        break;
    case (input >= 60 && input < 70):
        console.log("Your grade is C");
        break;
    case (input >= 50 && input < 60):
        console.log("Your grade is D");
        break;
    default:
        console.log("Your grade is F")
};

let autumnMonths = ["September", "October", "November"];
let winterMonths = ["December", "January", "February"];
let springMonths = ["March", "April", "May"];
let summerMonths = ["July", "June", "August"];

switch (true) {
    case (autumnMonths.includes(input)):
        console.log("Is Autumn Season this Month");
        break
    case (winterMonths.includes(input)):
        console.log("Is Winter Season this Month");
        break
    case (springMonths.includes(input)):
        console.log("Is Spring Season this Month");
        break
    case (summerMonths.includes(input)):
        console.log("Is Summer Season this Month");
        break
    default:
        console.log("This is not a month")
}

let weekend = ["Saturday", "Sunday"];

if(weekend.includes(input)){
    console.log(input, "is a weekend");
}else{
    console.log(input, "is a weekday");
}