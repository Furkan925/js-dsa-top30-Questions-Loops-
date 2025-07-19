// Prime or composit check in a number  prime num=jo apne aur ek se devide hota hai 
let number=Number(prompt("Enter the ending number"));
if(isNaN(number)){
console.log("Enter a valid number")
}else{
    let isPrime=true
    if(number<2){
        isPrime =false;
    }else{
        let i=2
        while(i<=Math.sqrt(number)){
            if(number%i===0){
                isPrime=false;
                break;
            }i++;
        }
    }
    if(isPrime){
        
        console.log(number+"is a prime ");
        
    }else{
        console.log(number+"is not a prime");
        
    }
}
        
