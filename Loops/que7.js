// check if number is a palindrome  121=121,1221
let number = Math.floor(Number(prompt("Enter the number")));
let original = number;
if (isNaN(number)) {
  console.log("Enter a valid number");
} else {
  let reverse = 0;
  while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
  }
  console.log(reverse);
  if (original === reverse) {
    //num left 0
    console.log("it is a palindrome number");
  } else {
    console.log("it is not a palindrome number");
  }
}
