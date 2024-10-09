var rightnow= new Date();
console.log(rightnow);

var month=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
console.log(month[rightnow.getMonth()]);

var day=["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];
a=day[rightnow.getDay()]
console.log(`Today is `+a.slice(0,3))

if (rightnow.getDay==0||rightnow.getDay==6){
    console.log("Its Fun Day!")
}


if (rightnow.getDate()<=15){
    console.log("First fifteen days of the month")
}
else if(rightnow.getDate()>15){
    console.log("last fifteen days of the month")
} 

console.log(`Current date: `+rightnow)
console.log(`Ellapsed milliseconds since 1 january, 1970 : `+rightnow.getTime());
console.log(`Ellapsed minutes since 1 january, 1970 : `+rightnow.getTime()/60000);


if(rightnow.getHours()<=12){
    console.log(`Its AM`);
}
else if(rightnow.getHours()>12){
    console.log(`Its PM`);
}


laterDate=new Date("December 31,2020");
console.log(`Later Date: ${laterDate}`);

ramdanDays= new Date("June 18, 2015");
b=(rightnow.getTime()-ramdanDays.getTime())/86400000;
console.log(`${b.toFixed(0)} Days passed since Ramadan 2015`);

// var current= new Date();
// var hourAgo=current.setHours(1);

// console.log(`An hour ago it was: ${current}`);

// var age= prompt("Enter your Age");
// console.log("Your age "+age);
// console.log("YOur Birth year "+rightnow.getFullYear()-age);

function date(){
    console.log(new Date());
}
date();

function greet(){
    var FirstName=prompt("Enter your first name");
    var secondName=prompt("Enter your second name");
    alert(FirstName+" "+secondName);
}

function add(){
    var FirstNum=prompt("Enter your first num");
    var secondNum=prompt("Enter your second num");
    console.log(FirstNum+secondNum);
}

// function calculator(val1, val2, operator) {
//     if (operator === "+") {
//       return val1 + val2;
//     } else if (operator === "-") {
//       return val1 - val2;
//     } else if (operator === "*") {
//       return val1 * val2;
//     } else if (operator === "/") {
//       return val1 / val2;
//     } else if (operator === "%") {
//       return val1 % val2;
//     } else {
//       return "Invalid operator";
//     }
//   }
//   var answer=calculator(+prompt("Enter first number"),+prompt("Enter second number"),prompt("Enter operator"));
//   console.log(answer);

function square(num){
    console.log(num*num);
}
// square(num=prompt("enter a number"));

function factorial(number){
    for(i=number-1;i>0;i--){
        number=number*i;
    }
    console.log(number);
}
// factorial(prompt("Enter a number"));

function counting(start,end){
    numbers=[];
    for (i=start;i<=end;i++){
        console.log(numbers[i]);
    }
}
// counting(2,8);

