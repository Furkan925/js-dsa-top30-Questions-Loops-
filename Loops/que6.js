// Reverse a Number using loops
let number = Math.floor(Number(prompt("Enter the number")));
if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
    let reverse = 0;
    while (number > 0) {                       //123,d=3,reverse=3,32
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }
    console.log(reverse);
}

