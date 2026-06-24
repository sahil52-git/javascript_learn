const tinderUser = new Object()
// console.log(tinderUser);


tinderUser.id = "2004"
tinderUser.name = "Sahil"

// console.log(tinderUser);

// const regularUser = {
//     email : "sahilshrestha741@gmail.com",
//     fullname : {//object
//         userfullname: {
//         firstname : "sahil",//object
//         lastname : "Shrestha"
//         }
//     }
// }
//     console.log(regularUser.fullname?.userfullname.firstname);
    
//     console.log(regularUser.fullname?.userfullname.lastname);

    
    // const obj1 = {1: "a", 2: "b"}
    // const obj2 = {3: "c", 4: "d"}
    // const obj4 = {5: "e", 6: "f"}

    // const obj3 = {obj1, obj2}

    // const obj3 = Object.assign({}, obj1, obj2, obj4) //normall obj assign
    // const obj3 = {...obj1, ...obj2, ...obj4} //using split method instead of above
    // console.log(obj3);


   const course = {
    courseName: "java learn",
    price: "999",
    courseLearn: "Sahil"
   } 

   const {courseLearn} = course
   
   console.log(courseLearn);
   

/*json 
   {
    "name" : "sahil",
    "course" : "javascript",
    "age" : "23"
   }

   {
    {},
    {},
   }
   */

   