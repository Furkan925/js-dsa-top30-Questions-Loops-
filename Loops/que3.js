// print the sum of numbers from 1 to n 
let n=Number(prompt("Enter the ending number"));
let sum=0;
if(isNaN(n)){
console.log("Enter a valid number")
}else{
    for(let i=0;i<=n;i++){      // formula let sum = (n * (n + 1)) / 2;
      sum+=i;
    }
    console.log("sum is ",sum);    
}
