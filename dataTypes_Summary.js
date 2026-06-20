/*Primitive data type

7types : String, number , boolean , null and undefined, BigInt

*/


const bigNumber = 328974329847129874n

const BigInt = 2003439084350948350980983409812340913294810293840912834902380983250975904928134

console.log(typeof bigNumber);

console.log(typeof BigInt);

function MyFunction(){
    document.getElementById(MyFunction).innerHTML = "Function"

    console.log(MyFunction);
    
}


/*Non-primitive/(reference type)

Array, Objets, browser web event handling 

*/

//stack (primitive) , Heap (Non-primitive)
let pookieName = "Shupriya"

let firstName = pookieName


firstName = "sahil"


console.log(pookieName);

console.log(firstName);


console.log([firstName, pookieName]); //multiple function calling


let BankAccount = {
    Branch : "kalopul",
    BankName : "Siddharta Bank",
    AccountType : "saving",
    UserName : "sahil",
     Email : "sahilshrestha@google.com"
   
}

let BankAccount2 = BankAccount


BankAccount2.Branch = "Maligaun",
BankAccount2.BankName = "Nabil Bank",
BankAccount2.UserName = "Shupriya",
BankAccount2.Email = "shupriyasahil@gmail.com"

console.log(BankAccount.Email);
console.log(BankAccount2.Email);



