
/* HARD CHALLEGE */

let tomMass = 8;
let tomHeight = 9;
let jerryMass = 1;
let jerryHeight = 4;

let tomBMI = tomMass / tomHeight ** 2;
let jerryBMI = jerryMass/ jerryHeight ** 2;

let higherBMI;
if (tomBMI > jerryBMI) {
    higherBMI = 'Tom has a higher BMI'
}else{
    higherBMI = 'Jerry has a higher BMI'
}
console.log(higherBMI);



/* MEDIUM CHALLENGE */

let months = prompt("Please enter a number between 1-12.");

if (months == 1){
    console.log("January")
}else if (months == 2){
    console.log("February")
}else if (months == 3){
    console.log("March")
}else if (months == 4){
    console.log("April")
}else if (months == 5){
    console.log("May")
}else if (months == 6){
    console.log("June")
}else if (months == 7){
    console.log("July")
}else if (months == 8){
    console.log("August")
}else if (months == 9){
    console.log("September")
}else if (months == 10){
    console.log("October")
}else if (months == 11){
    console.log("November")
}else if (months == 12){
    console.log("December")
}else {
    console.log("Please enter a Number between 1-12.")
}






/* EASY CHALLENGE */ 

let students =[["Tien", "Do", "22"], ["John", "Doe", "23"], ["Joseph", "Gribble", "17"]];

console.log ('Hello, my name is ${students[1][0]} ${students[1][1]} and Im ${students[1][2]} years old'); 





/* VERY EASY CHALLENGE */ 

function min( firstNum, secondNum) {
  let minTotal = Math.min(firstNum, secondNum);
  console.log(minTotal);
}
min(2, 7);








