// Find sum of squares of digits of a number 
let number = parseInt(prompt("Enter the number"));
let sum = 0;
if (isNaN(number)) {
    console.log("Enter valid input");
} else {
    let digits = number.toString();
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        sum += Math.pow(digit, 2);
    }
    console.log(sum);

}