// print all even numbers 1 to n
let n = Number(prompt("Enter the ending numbers"));
console.log(n);
if (isNaN(n) || n <= 0) {
    console.log("Enter a valid number");
} else {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
