/*0-1 Trinagle (alternating 0s and 1s )
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

 */
const prompt=require("prompt-sync")();
let n= parseInt(prompt("Enter the number "))
for (let i = 1; i <=n; i++) {
   let row='';
   for (let j = 1; j <=i; j++) {
   if((i+j)%2===0){
    row=row+"1 "
   }else{
    row=row+"0 "
   }
    
   }
   console.log(row)
    
}