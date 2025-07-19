// sum of a digits of a number 
let number = Math.floor(Number(prompt("Enter the number")));
if (isNaN(number)) {
    console.log("Enter a valid number");
} else {
    let sum=0;
        while(number>0){
             let digit=number%10;
              sum=sum+digit;        //sum 0+4=4
              number=Math.floor(number/10);
        }
        console.log(sum);
        
}

