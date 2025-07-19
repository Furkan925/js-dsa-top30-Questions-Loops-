/*Inverted Triangle of*
*****
****
***
**
*

 */
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the number"));
for (let i = num; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
