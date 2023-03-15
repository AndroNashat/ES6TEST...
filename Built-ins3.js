/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();


members.set['Evelyn', 75.68
,'Liam', 20.16
,'Sophia', 0
,'Marcus', 10.25];


let a, b;
for (const member of members) {
   [a , b] = member;
    console.log(a , b);
}