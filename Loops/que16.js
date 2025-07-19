// Count how many digits in a number are even 
let number =Number(prompt("Enter the number "));
if (isNaN(number)) {
  console.log("Enter a valid number");
} else {
let digits=number.toString();
let count=0;
for (let i = 0; i <=digits.length; i++) {
    let digit =parseInt(digits[i]);
    if(digit%2===0) count++;
}
console.log("number of even digits:",count);

}