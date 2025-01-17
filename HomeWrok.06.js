/*
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal
*/
console.log('\n---------------TASK1---------------\n');


function noSpace(str) {

    return str.split(' ').join('');
}

console.log(noSpace(''));
console.log(noSpace("Javascript"));
console.log(noSpace("    Hello   "));
console.log(noSpace(" Hello World   "));
console.log(noSpace("Tech Global")); 

/*
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""
*/
console.log('\n---------------TASK2---------------\n');

function replaceFirstLast(string) {
string =  string.trim();

if(string.length < 2){
    return "";
}
let firstChar = string[0];
let lastChar = string[string.length-1];
let middleChar = string.slice(1, -1);
return lastChar + middleChar + firstChar;
}


console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("    A      ")); 

/*

Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true

*/
console.log('\n---------------TASK3---------------\n');

function hasVowel(string){
    
let lowerCase = string.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
   
for(let char of lowerCase){
    if(vowels.includes(char)){
        return true;
    }
} return false;
}

console.log(hasVowel(""));  
console.log(hasVowel("Javascript"));
console.log(hasVowel("Tech Global"));
console.log(hasVowel("1234"));
console.log(hasVowel("ABC"));

/*
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID
*/
console.log('\n---------------TASK4--------------\n');

function checkAge(yearOfBirth) {
let currentYear = 2023
let age = currentYear - yearOfBirth 
if(age < 0 || age > 120) return "AGE IS NOT VALID";
else if( age < 16) return "AGE IS NOT ALLOWED";
else return "AGE IS ALLOWED";

}

console.log(checkAge(2015)); 
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));

/*

Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15

*/

console.log('\n---------------TASK5--------------\n');


function averageOfEdges(num1, num2, num3){

    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);
    let average = (maxNum + minNum) / 2;
    
    return average;
}

console.log(averageOfEdges(0, 0, 0));  
console.log(averageOfEdges(0, 0, 6)); 
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20)); 

/*

Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]

*/

console.log('\n---------------TASK6--------------\n');

function noA(array){
    let result = [];
    for(let i = 0; i < array.length; i++) 
    {if(array[i][0] === 'A' || array[i][0] === 'a') {result.push('###');}
    else {result.push(array[i]);} } return result;}

console.log(noA(["javascript", "hello", "123", "xyz"])); 
console.log(noA(["apple", "123", "ABC", "javascript"])); 
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]));

/*

Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 

*/
console.log('\n---------------TASK7--------------\n');

function no3and5(array) {
let result = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 5 === 0 && array[i] % 3 ===0) result.push(101);
     else if( array[i] % 3 === 0 ) result.push(100);
    else if (array[i] % 5 === 0) result.push(99);
    else result.push(array[i]);
} return result;

}

console.log(no3and5([7, 4, 11, 23, 17])); 
console.log(no3and5([3, 4, 5, 6])); 
console.log(no3and5([10, 11, 12, 13, 14, 15])); 


/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  

*/


console.log('\n---------------TASK8--------------\n');

function countPrimes(array) {
return array.filter(num => {if (num <=1) return false;for (let i = 2; i <= Math.sqrt(num); i++){if (num % i === 0) return false;}
return true;}).length;}

console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 4
console.log(countPrimes([41, 53, 19, 47, 67])); 

/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])

*/

console.log('\n---------------TASK9--------------\n');


function removeDuplicates(array) {

    return array.filter((number , item) => array.indexOf(number) === item)}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); 
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); 
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));




/*

Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ") 

*/

console.log('\n---------------TASK10--------------\n');





/*

Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10]) 

*/

console.log('\n---------------TASK11--------------\n');

function secondMax(array) {
    if(array.length === 1) {
        return array[0];
    }
    array.sort((a, b) =>  b - a);
    let secMax = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] < secMax){
            return array[i];}
    }
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); 
console.log(secondMax([3, 4, 5, 6])); 
console.log(secondMax([10]));


/*

Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 4
secondMax([10]) 

*/

function secondMin(array){
    if( array.length === 1){
        return array[0]
    }
    array.sort((a, b) => a - b)

    let secMin = array[0]

    for(let i = 1; i < array.length; i++) {
        if(array[i] > secMin){
            return array[i]
        }
    }
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMin([3, 4, 5, 6])); // 4
console.log(secondMin([10]));



/*
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> 
"pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> 
"TechGlobal"

*/














