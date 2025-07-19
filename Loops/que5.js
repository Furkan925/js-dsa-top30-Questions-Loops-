// count digits in a Number 
let n=Math.floor(Numberr=(prompt("Enter the ending number")));
if(isNaN(n) ){
console.log("Enter a valid number")
}else{
    let digits=n.toString().replace('-','').replace('.','');
    console.log(digits.length);
}
