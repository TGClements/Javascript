//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


function refactorWhile() {

    let i = 0;
    while(i < 10) {

        console.log(" the value of i in the loop is : " + i);
        i++;
    }
}
refactorWhile();



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

// ( ((30+2)*20) / (10^2) )

function mult1(x,y) {
    return x*y;
}
function add1(x,y) {
    return x+y;
}
function divide1(x,y) {
    return x/y;
}
function powerOf(x,y) {
    return Math.pow(x,y);
}
function doMoreMath() {

    let result = divide1( mult1(add1(30,2), 20), powerOf(10,2));
    console.log("The result is: " + result);
}
doMoreMath();



/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

function determineTruthyFalsy() {

    const zero = 20;

    // using ternary to not have to write 4x more the amount of code for if/else blocks
    console.log( 20 ? "20 is truthy because it inherently has an int value." : "20 is falsy." );
    console.log( 0 ? "0 is truthy." : "0 is falsy because it represents having no (or zero) int value." );
    console.log( "zero" ? "\"zero\" is truthy because it inherently has a string value." : "\"zero\" is falsy." );
    console.log( zero ? "zero is truthy because it represents the number 0, so it has an inherent value." : "zero is falsy." );
    console.log( null ? "null is truthy." : "null is falsy because it does not contain value." );
    console.log( "0" ? "\"0\" is truthy because it has a string value." : "\"0\" is falsy." );
    console.log( !"" ? "!\"\" is truthy because it's the opposite of the null string \"\", which has inherently no value." : "!\"\" is falsy." );
    console.log( {} ? "{} is truthy because any kind of object has an inherent value." : "{} is falsy." );
    console.log( "() => {console.log(\"hello TEKcamp!\"); is truthy because all functions contain inherent value.");
    console.log( 125 ? "125 is truthy because it has inherent int value." : "125 is falsy." );
    console.log( undefined ? "undefined is truthy." : "undefined is falsy because it represents having no value." );
    console.log( "" ? "\"\" is truthy." : "\"\" is falsy because empty strings contain no values." );
}
determineTruthyFalsy();



/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

function refactorToSwitch() {

    const day= "friday";

    switch(day) {

        case "monday":
            console.log("we got a long week ahead of us...");
            break;
        case "tuesday":
            console.log("tuesday's are still beterr than mondays, but LONG way to go still");
            break;
        case "wednesday":
            console.log("We are smack dab in the middle of the week");
            break;
        case "thursday":
            console.log("Thursday night... the mood is right");
            break;
        case "friday":
            console.log("TGIF.  Friday truly is the best day of the week!")
            break;
        default:
            console.log("It's a weekend!");
            break;
    }
}
refactorToSwitch();



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

function refactorTernary() {

    const age = 10;

    console.log( age > 21 ? "adult" : "minor" );
    console.log( (age > 13) && (age < 19) ?  "teen" : "not a teenager");
    console.log( age > 65 ? "retired" : "still working..." );
}
refactorTernary();



/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

function myselfAsAnObject() {

    let myself = {
        name: "Tyler Clements", 
        age: "28", 
        gender: "Male", 
        hobbies: "Gaming, Growing hot peppers", 
        profession: "Bootcamp Student",
        education: "Bachelor's in Information Technology",
        learn: function() {console.log(this.name);},
        growPeppers: function() {console.log("My hobbies include: " + this.hobbies);}
    };
    myself.learn();
    myself.growPeppers();
}
myselfAsAnObject();



/************************************************************* */
// Problem 7: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...



/************************************************************* */
//Problem 8: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...



/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


