const onePiece = ["luffy", "zoro", "sanji", "Chopper", "Nami", "Usoppp"]
const drSenku = ["sahil", "yukesh", "Rabet", "Robin"]


// onePiece.concat(drSenku)
//output for concat shows only the value for onepiece variable
/*PS C:\Users\Admin\OneDrive\Documents\projects\javascript\02_basics> node .\02_ArrayExample.js
[ 'luffy', 'zoro', 'sanji', 'Chopper', 'Nami', 'Usoppp' ]
*/
/*
onePiece.push(drSenku)
//output when used push method
'luffy',
  'zoro',
  'sanji',
  'Chopper',
  'Nami',
  'Usoppp',
  [ 'sahil', 'yukesh', 'Rabet', 'Robin' ]
   */
// console.log(onePiece);


//concat example
// const allArray = onePiece.concat(drSenku)
// console.log(allArray);

/*output of concat combines two arrays
 'luffy', 'zoro',
  'sanji', 'Chopper',
  'Nami',  'Usoppp',
  'sahil', 'yukesh',
  'Rabet', 'Robin'
*/

//using spread out method instead of concat similar output as concat (... is spread)
// const all_Array = [...onePiece, ...drSenku]
// console.log(all_Array);

//Multiple arrays 
const another_Array = [1, 2, 3, [4, 5], 6, 7,[8, 9], 10,[0, 1]]

const last_One_Array = another_Array.flat(Infinity)
console.log(last_One_Array);
/*output
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10,
  0, 1
] */
console.log(Array.isArray("Sahil"));
console.log(Array.from("Sahil"));

let score1 = 100
let score2 = 200
let score3 = 999

console.log(Array.of(score1, score2, score3));


