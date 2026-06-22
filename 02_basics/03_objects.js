//singleton


//objects literals
Object.create

const my_Sym = Symbol["key1"] //interview questions
const JsUser = {
    name : "Sahil",
    [my_Sym]: "mykey1",
    age : 22,
    Standard : "Bachelors",
    email : "sahilshrestha741@gmail.com"
}; //objects

//object calling method 1
console.log(JsUser.name);
console.log(JsUser[my_Sym]); //interview
console.log(JsUser["email"]);


console.log(JsUser);
