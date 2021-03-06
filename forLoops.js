// FOR LOOPS

console.log(`There's no place like home`);
console.log(`There's no place like home`);
console.log(`There's no place like home`);

/*
Syntax Example

for (1st Statement; 2nd Statement; 3rd Statement){
    CODE TO BE RUN GOES HERE;
}
*/ 

// 1st statement only runs at the very beginning
// Code in for loop with run (1st loop)
// 3rd statement will run after each loop and then check to see if the 2nd statemnt is still true before looping again
// Loop will continue as long as the 2nd statement remains true

// Example 1
for (i = 1; i<=3; i++){
    console.log(`There's no place like home`);
}

/*
let i = 1;
i++;
2
i++;
3
i++;
4
*/

// INFINITE LOOP (Do NOT run this)
/* 
for (i = 1; i > 0; i++){
    console.log("THIS WOULD RUN FOREVER")
}
*/

// Example 2
for (i = 1; i < 6; i++){
    console.log(i);
}

// Example 3 (Counts down from 5 to 0)
for (i = 5; i >= 0; i--){
    console.log(i);
}

// Example 4 (Counts from 0 to 10 by 2 (AKA Even numbers))
for (i = 0; i <= 10; i +=2){
    console.log(i);
}

// Example 5 (Counts from 1 to 25)
for (i = 1; i <=25; i++){
    console.log(i);
}

// Example 6 (Loops through an array)
const topics = [
    `Terminal`,
    `HTML`,
    `CSS`,
    `SASS`,
    `Bootstrap`
];
for (i = 0; i < topics.length; i ++){
    console.log(`${i + 1}. ${topics[i]}`);
}

// Example 7 (Nesting with For Loops)
for (i = 1; i<=2; i++){
    console.log(`Outer Loop`);
    for (x = 1;x <= 3; x++){
        console.log(`Nested Loop`);
    }
}
