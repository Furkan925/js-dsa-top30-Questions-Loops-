// find the factorial of a number 
let number = Math.floor(Number(prompt("Enter the number")));
if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
   let fact = 1;
    for (let i = 1; i <= number; i++) {
       fact = fact * i;
    }
    console.log(`factorial of ${number} is `, fact);
}

