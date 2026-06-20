const accountId = 12345
let accountEmail = "sahilshrestha741@gmail.com"
var accountPassword = "2079"
accountCity = "kathmandu"
accountHanlder = null

let accountState = null 

/*prefer not to use var keyword
 due to its scope (use const and let keyword)
*/

accountEmail = "example@gmail.com"
accountPassword = "sahil"
accountCity = "lalitpur"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

console.log(typeof accountHanlder)