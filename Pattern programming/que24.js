/*Number triangle of(1 to N in each row)
1
12
123
1234
12345

 */
const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the value of number"));
for (let i = 1; i <= n; i++) {
  let row = "";
  let num = 1;
  for (let j = 1; j <=i; j++) {
    row += num;
    num++;
  }
  console.log(row);
}
