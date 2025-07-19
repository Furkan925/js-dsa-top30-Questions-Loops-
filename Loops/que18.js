let number=parseInt(prompt("Enter the number"));
if (isNaN(number)) {
    console.log("Enter valid input");
    
}else{
    let digits=number.toString();
    let count=0;
    for (let i = 0; i<digits.length; i++) {
       let digit=parseInt(digits[i]);
       if(digit>5)count++;
    }
    console.log("digits greater then 5 in a number is ",count);
}