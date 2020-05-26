//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

function convertFToC(currentTemp) {

    var tempInF = currentTemp;

    console.log( ((tempInF - 32) * (5/9)) );
}

function convertCToF(currentTemp) {

    var tempInC = currentTemp;

    console.log( ((tempInC * (9/5)) + 32) );
}

convertFToC(64);
convertCToF(64);



/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

function isOldEnough(ageOfPerson) {

    var theirAge = ageOfPerson;

    console.log( (theirAge >= 18) ? "Yes" : "No" );
}

isOldEnough(16);
isOldEnough(42);



/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

function stringToArray() {

    var sentence1 = "The five boxing wizards jump quickly.";
    var array1 = sentence1.split(" ");

    console.log(array1);

    array1 = array1.join(' ');
    console.log(array1);
}

stringToArray();



/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

// Input can be in following formats:
// Strings  | "(123) 456-7890" | "123-456-7890"
// Integers | 12345667890
function reversePhNum(num) {

    var myNum = num.toString();
    var stringToReverse = myNum.split(/\D/).join('').split('').reverse().join(''); // split any input with regex to isolate numbers (splits into clusters). rejoin them to make 1 string of just numbers. split the numbers. reverse them. join them back.

    console.log(stringToReverse);
}

reversePhNum("(123) 456-7890");
reversePhNum("123-456-7890");
reversePhNum(1234567890);



/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

function createCar() {

    var myCar = {make:"Honda", model:"Civic Si", year:"2018", color:"Red"};
    return myCar;
}
function getCarInfo() {

    var myCar = createCar();

    console.log("Year: " + myCar.year);
    console.log("Color: " + myCar.color);
    console.log("Make: " + myCar.make);
    console.log("Model: " + myCar.model);
}

getCarInfo();



/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


function checkEvenOrOdd() {

    for(var i=0; i<16; i++) {
        
        console.log( (i%2 == 0) ?  i + " is even." : i + " is odd."); // Check if each number is divisible by 2. if yes, output even, if no, output odd.
    }
}

checkEvenOrOdd();



/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." 
// For numbers that are multiples of both 3 and 5, print "TEKcamp."

function multiplesOfThree() {

    for(var i=1; i<100; i++) {
        
        if((i%3 == 0) && (i%5 == 0)) { //if number is multiple of 3 & 5
            console.log("TEKcamp");
        } else if(i%3 == 0) { // if number is multiple of 3
            console.log("TEK");
        } else if(i%5 == 0) { // if number is multiple of 5
            console.log("camp");
        }
    }
}

multiplesOfThree();



/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

function parseArrayInThirds(nums) {

    for(var i=0; i<nums.length; i++) {
        if((i == 0) || (i % 3 == 0)) { // if number is 0 or a multiple of 3, log the number
            console.log(nums[i]);
        }
    }
}

parseArrayInThirds(nums);



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

function problemNine(foodArray, adjectiveArray) {

    var school = foodArray.pop();
    console.log(school.school);
    foodArray.push(school.school);
    
    for(var i=0; i<foodArray.length; i++) {
        if(i==0 || i==1 || i==3)
            console.log(foodArray[i] + " are " + adjectiveArray[i]);
        else
            console.log(foodArray[i] + " is " + adjectiveArray[i]);
    }
}

problemNine(foodArray, adjectiveArray);



/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly 
// does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should 
// return the computed value of any operation performed.

const operations = [
    add = function(x,y) {console.log("Performing operation:" + x + " + " + y); return x+y;}, 
    subtract = function(x,y) {console.log("Performing operation:" + x + " - " + y); return x-y;}, 
    multiply = function(x,y) {console.log("Performing operation:" + x + " * " + y); return x*y;}, 
    divide = function(x,y) {console.log("Performing operation:" + x + " / " + y); return x/y;}
];

function doMath(x,y,operations) {

    var randomNum = Math.floor(Math.random() * 4);

    console.log(operations[randomNum](x,y));
};

doMath(2,4,operations);
doMath(213,46,operations);