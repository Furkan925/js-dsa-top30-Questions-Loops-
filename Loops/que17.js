// Find the difference between sum of even and odds digits 
let number = Number(prompt("Enter the ending number"));
let evenSum = 0;
let oddSum = 0;
if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
    let digits =Math.abs(number).toString()
    for (let i = 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`difference between even and odd sums is ${evenSum-oddSum}`);
    
}
