// Example 1 
for (i = 1; i <= 2; i++) {
    console.log(i);
}

// Example 2 Counts down from 3 to 0
for (i = 3; i >= 0; i--) {
    console.log(i);
}

// Example 3 (Counts down from 0 to 6 by 3 (0, 3, 6))
for (i = 0; i <= 6; i+=3){
    console.log(i);
}

// Example 4 (Loops through the characters/letters in a string)
const wV = "WandaVision";
for (i = 0; i < wV.length; i++) {
    console.log(wV[i]);
}

// Example 5 (Nesting with For Loops)
for (i = 1; i<= 2; i++) {
console.log(i);
for (x = 1; x <= 4; x*=2) {
    console.log(x);
}
}