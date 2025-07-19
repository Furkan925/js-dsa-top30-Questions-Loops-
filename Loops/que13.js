// count how many times a digit appears in a number 
let number = Number(prompt("Enter the ending number"));
let targetDigit = Number(prompt("Enter the digit to count"));
let count = 0;
if (isNaN(number) || targetDigit < 0 || targetDigit > 9 || isNaN(targetDigit)) {
    console.log("Enter a valid number")
} else {
    number = Math.abs(number);
    while (number > 0) {
        let digit = number % 10;
        if (targetDigit === digit) count++;
        number = Math.trunc(number / 10);
    }
    console.log(count);

}