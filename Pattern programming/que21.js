/*solid square of * 
*****
*****
*****
*****
*****
*/
const prompt=require("prompt-sync")();
let num=parseInt(prompt("Enter the number"));
for (let i = 0; i<num; i++) {
   for (let j = 0; j <num; j++) {
    process.stdout.write("*");
    
   }
    console.log("");
}
