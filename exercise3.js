//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

function problem1(yourString) {

    if(yourString === "")
        console.log("True");
    else 
        console.log("False");
}
problem1("this is my string");
problem1("");



/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

function problem2() {

    let myString = "Learning JavaScript is fun!";
    myString = myString.split(" ");
    myString[3] = "cool!";
    myString = myString.join(" ");

    console.log(myString);
}
problem2();



/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

function problem3() {

    let numArray = [1,2,3,4,5];
    let newArray = numArray.map(x => Math.pow(x,2));
    console.log(newArray);
}
problem3();



/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

function problem4() {

    let numArray = [1,3,5,7,9,1,3,5];
    let newArray = numArray.filter(x => {if(x>3) return x;});
    console.log(newArray);
}
problem4();



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

function problem5() {

    let numArray = [2,4,6,8,10];
    let sum = numArray.reduce(reducer = (sum, currentValue) => sum + currentValue);
    console.log(sum);
}
problem5();



/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

function problem6(DNA) {
    
    let habArray = DNA.split("");

    console.log(habArray);

     let complimentaryDNA = habArray.map(x => {
        switch(x) {
            case "C":
                return "G";
            case "G":
                return "C";
            case "A":
                return "T";
            case "T":
                return "A";
            case "N":
                return "N";
            default:
                return;
                break;
        }
    });

    console.log(complimentaryDNA);
}
// this is a sub-sequence of RNA for a Habanero pepper (the full sequence consists of over 2.25 million sub-sequences and would create a text file > 1.1GB!!)
const habRNA = "GAAACAAGCATACTGGGGAGTGCATTAGGATAAAATTGGCAAATGCGAGCAACCAAAAGAGCCCAATTCANNNN";
problem6(habRNA);



/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  
//Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    
    let step1Array = numbers.map(x => {
        switch(x) {
            case "one":
                return 1;
            case "two":
                return 2;
            case "three":
                return 3;
            case true:
                return "";
            case isNaN(Number(x)):
                return "";
            default:
                return Number(x);
        }
    });

    let step2Array = [];
    for(var i=0; i<step1Array.length; i++) {
        let temp = 0;
        if(isNaN(step1Array[i]) || step1Array[i] == ""){
        }
        else {
            step2Array.push(step1Array[i]);
        }  
    }

    console.log(Math.max(...step2Array));
}
maxNumber(numbers);

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    let step1Array = numbers.map(x => {
        switch(x) {
            case "one":
                return 1;
            case "two":
                return 2;
            case "three":
                return 3;
            case true:
                return "";
            case isNaN(Number(x)):
                return "";
            default:
                return Number(x);
        }
    });

    let step2Array = [];
    for(var i=0; i<step1Array.length; i++) {
        let temp = 0;
        if(isNaN(step1Array[i]) || step1Array[i] == ""){
        }
        else {
            step2Array.push(step1Array[i]);
        }  
    }

    step2Array.sort(function(a,b) {return a-b}).reverse();

    console.log(step2Array);
};
sortNums(numbers);



/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

let myObject = {company : "TEKsystems"};
const mapObj = new Map();
mapObj.set(myObject,"object");
mapObj.set(1,"int");
mapObj.set(2.5,"float");
mapObj.set('b',"char");
mapObj.set(true,"boolean");
mapObj.set("this is a string","string");
console.log(mapObj);

console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

console.log("The above console log returns false because the object does not have a saved referece. Once it does, it will return: " + mapObj.has(myObject));

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
let theArray = [];
mapObj.forEach(function(value, key) {
    theArray.push(value);
});
console.log(theArray);



/************************************************************* */
//Problem 9:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
let reverseOnes  = ones;
console.log(reverseOnes.reverse());



/************************************************************* */
//Problem 10:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function logTheConsole() {
    console.log("This is in the callback function!");
}

function performer(cb) {
    
    cb();
}
performer(logTheConsole);



/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

console.log("In ES6, there are extended literals for binary. 111 in binary should output 7: " + 0b0111 + " - values are automatically converted to decimal. Let's change it back to: " + (0b0111).toString(2));
console.log("In ES6, there are extended literals for octal. 161 in octal should output 113: " + 0o161 + " - values are automatically converted to decimal. Let's change it back to: " + (0o161).toString(8));

let bin7 = 0b0111;
let bin3 = 0b0011;

let longBin1 = 0b010101111010001101;
let longBin2 = 0b111010110100011110;

console.log("\n\nYou can manipulate binary literals with normal bitwise operations and math!!");
console.log("\nPerforming bitwise AND on 0111 and 0011. Should result in 11. " + (bin7 & bin3).toString(2) ); // just printing out (bin7 & bin3) auto-converts it to a decimal. toString converts it back to binary for readability
console.log("\nPerforming bitwise AND on 010101111010001101 and 111010110100011110. \nShould result in 10000110000001100. \n" + (longBin1 & longBin2).toString(2));
console.log("\nPerforming bitwise OR on 010101111010001101 and 111010110100011110. \nShould result in 111111111110011111. \n" + (longBin1 | longBin2).toString(2));
console.log("\nPerforming binary addition on 010101111010001101 and 111010110100011110. \nShould result in 1010000101110101011. \n" + (longBin1 + longBin2).toString(2));
console.log("\nPerforming binary subtraction on 010101111010001101 and 111010110100011110. \nShould result in -100100111010010001. \n" + (longBin1 - longBin2).toString(2));
console.log("\nPerforming XOR on 010101111010001101 and 111010110100011110. \nShould result in 101111001110010011. \n" + (longBin1 ^ longBin2).toString(2));