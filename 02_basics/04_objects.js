// const tinderUser = new Objects();
const tinderUser = {};
tinderUser.id = 123;
tinderUser.name = "Rajukumar";
tinderUser.IsloggedIn = true;
console.log(tinderUser);
const regularUser = {
    eamil:'Rajukumar@vscode.com',
    fullname:{
        userFullName :{
            firstName : 'Raju',
            lastName : 'Kumar'
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);
// const obj1 = {1:'a',2:'A'};
// const obj2 = {2:'b',3:'B'};
// const obj3 = {3:'c',4:'C'};
// const obj4 = {obj2,obj3};
// // console.log(obj4);
// const obj5 = Object.assign({},obj1,obj2,obj3);
// // console.log(obj5);
// const obj6 = {...obj1,...obj2,...obj3,...obj4,...obj5}
// console.log(obj6);


const User = [
    {
        id:1,
        email:'xyz@gmail.com'
    },
    
    {
        id:2,
        email:'asdfsdf@gmail.com'
    }
    ,
    {
        id:3,
        email:'23423@gmail.com'
    }
]
// console.log(User);
// User[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const cours={
    coursename : "js in hindi",
    prince : '999',
    courseInstructor :'raju'
}
cours.courseInstructor;
const {courseInstructor:instructore} = cours
// console.log(courseInstructor);
console.log(instructore);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




