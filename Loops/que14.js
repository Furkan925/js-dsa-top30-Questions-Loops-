// check if number is a perfect (Number devisor=sum)
let number = Number(prompt("Enter the ending number"));
let temp = number;
let devisor = [];
if (isNaN(number)) {
    console.log("Enter a valid number")
} else {
    let sum = 0
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
            devisor.push(i);
        }
    }
    if (temp === sum) {
        console.log(`${number} is a perfect number`);

    } else {
        console.log("not a perfect number");

    }
    console.log("Devisors are " + devisor);

}