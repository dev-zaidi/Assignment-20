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

function calcualteHypotenuse(base,pependicular){
   
   function calculateSquare(value){
    return value**(2);
   }
   baseSquare= calculateSquare(base);
   perpendicularSquare= calculateSquare(pependicular);

   var hypotenuse=(baseSquare+perpendicularSquare)**(1/2);

    console.log(hypotenuse);
}

// calcualteHypotenuse(4,3);

// function AreaRectange(width,height){
//     var width=prompt("Enter width");
//     var height=prompt("enter height");
//     var area=width*height;
    
//     console.log(area);
// }
// AreaRectange();

function AreaRectange2(width,height){
    var width=2;
    var height=5;
    var area=width*height;
    
    console.log(area);
}
// AreaRectange2();

function palindrome() {
    var input = prompt("Enter any word to check if its palindrome").toUpperCase();
    var reverseWord = "";
    for (i = input.length - 1; i >= 0; i--) {
      reverseWord = reverseWord + input[i];
    }
    if (input === reverseWord) {
      console.log(
        `The word is Palindrome. ${input} written backwards remains ${reverseWord}`
      );
    } else console.log("The word is not Palindrome");
  }

// palindrome();


function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i]; 
        if (word.length > 0) {
            
            result += word.charAt(0).toUpperCase() + word.slice(1);
        }

        if (i < words.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}

capitalizeFirstLetterOfEachWord("the quick brown fox");


function calCircumference(radius){
     var circumference= 2*(3.14)*radius;
    //  return circumference;
     console.log("THE CIRCUMFERENCE IS: "+ circumference)
}
function calArea(radius){
    var area= (3.14)*radius*radius;
    // return area;
    console.log("THE AREA IS: "+ area)

}
 calCircumference(5);
 calArea(5);


 
