// Find the GCD(greatest common deviser) of two numbers (try using loop only ,no recursion) 
let number1 = Math.floor(Number(prompt("Enter the number1")));
let number2 = Math.floor(Number(prompt("Enter the number2")));
if (isNaN(number1) || isNaN(number2)) {
    console.log("Enter a valid number");
} else {
    let gcd = 1;
    let min = Math.min(number1, number2)
    for (let i = 1; i <= min; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            gcd = i;
        }
       
    }
     console.log(gcd);
}


