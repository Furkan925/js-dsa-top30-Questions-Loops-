/*Right-Angled Triangle of*
*
**
***
****
*****
 */
const prompt=require("prompt-sync")();
let num=parseInt(prompt("Enter the number"));
for(let i=1;i<=num;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row=row+"*";
    }
  process.stdout.write(row+"\n")
}