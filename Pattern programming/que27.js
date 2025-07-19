/*Diamond Pattern of *
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
 */
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
for (let i = 1; i <= n-1; i++) {
  let row = "";
  for (let k = 1; k <= n - i; k++) {
    row += " ";
}
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
  
    console.log(row);
}
for (let i = n; i >=1; i--) {
  let row="";
  for (let k = 1; k <=n-i; k++) {
    row+=" ";
}
    for(let j=1;j<=2*i-1;j++){
    row+="*";
}
  console.log(row)
}
