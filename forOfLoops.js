// FOR OF LOOP (Loop that iterates through a value)
/* 
Syntax Example

for (index of iterableValue){
    CODE TO BE RUN GOES HERE;
}
*/

// Strings and Arrays are values that can be iterated through. Cannot iterate through objects.

// Example 1
const pizza = `I love Pizza!`;

for (char of pizza){
    // Runs this console log for the value at each index of the pizza string variable. The value of each index is plugged into the index called char for each time through the loop.
    console.log(char);
}

// Example 2
const pizzaChains = [
    `Papa Johns`,
    `Little Ceasers`,
    `Deweys`,
    `Dominos`,
    `Big Ed's`
];

for (item of pizzaChains){
    // Displays the string/value at each index of the pizzaChains array each time through the loop
    console.log(item);
}

// Example 3
const pizzaToppings = [
    [`Bacon`, `Sausage`, `Ham`],
    [`Banana Peppers`, `Onions`, `Mushrooms`],
    [`Stuffed Crust`, `Feta Cheese`, `Sardines`],
];

// Displays the string/value at each index of the arrays in the pizzaToppings array each time through the loop "parent" loop. (Loops through "parent" loop three times and also loops through "nested" loop three times for each loop through the "parent" loop).
for (category of pizzaToppings){
    // console.log(category);
    for (topping of category){
        console.log(topping);
    }
}