// Find the smallest digit in a number 
let number = parseInt(prompt("Enter the number"));
if (isNaN(number)) {
    console.log("Enter valid input");

} else {
    let digits = number.toString()
    let smallestDigit=9;
    for (let i = 0; i < digits.length; i++) {
    let currentDigits=parseInt(digits[i]);
    if(currentDigits < smallestDigit)
        smallestDigit=currentDigits;
    }
    console.log(`smallest digit in number is ${smallestDigit}`);

}