// Check if a number is an Armstrong Number (153=1^3+5^3+3^3=153)
let number = Number(prompt("Enter the ending number"));
let temp = number;
if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
    let sum = 0;
    let digits = number.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        number = Math.floor(temp / 10);
    }
    if (number === sum) {
        console.log("it is Armstrong number");
    } else {
        console.log("not a armstrong number");
    }
}
