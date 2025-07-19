/*Number Pyrmaid (like 12321)
    1
   121
  12321
 1234321
123454321
*/
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number"));
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let k = 1; k <=n-i; k++) {
    row+=" ";
  }
  for (let j = 1; j <=i; j++) {
    row += j;
  }
  for (let j = i-1; j >=1; j--) {
   row+=j;
    
  }
  console.log(row);
}