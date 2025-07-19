// product of digits of a number \
let number = Number(prompt("Enter the ending number"));
let temp = number;
if (isNaN(number)) {
    console.log("Enter a valid number")
} else {
    let product = 1;
    number = Math.abs(number)
    while (number > 0) {
        let digit = (number % 10);
        product = product * digit;
        number = Math.floor(number / 10);
    }
    if (temp === 0) {
        console.log(0);

    } else {
        console.log(product);

    }

}

