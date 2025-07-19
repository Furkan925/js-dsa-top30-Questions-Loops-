// print the multiplication table of given number 
let n = Number(prompt("Enter the ending number"));
if (isNaN(n)) {
    console.log("Enter a valid number")
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} X ${i}=`, (n * i));
    }
}
