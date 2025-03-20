const user ={
    username : 'Raju',
    price : 199,

    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to website `);
        console.log(this);
    }
}
// console.log(user);
// console.log(user.welcomeMessage());
// user.username = 'sam';
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = 'Hitesh'
//     console.log(username)
// }
// chai()
// console.log(chai());

// function chaicode(){
//     let name = 'Raju ji';
//     console.log(`${name}`);
// }
// chaicode()

// const chai = () =>{
//     let username = 'papa ji'
//     console.log(username);
    
// }
// chai()   

const addtwoNumber = (num1,num2) => {
    return num1+num2;
}

const addtwo = (num1,num2) => num1+num2;
const addtwonum = (num1,num2) => (num1 + num2);
const add = (num1,num2) => ({username:"Helloji"});
console.log(addtwoNumber(5,5))
console.log(addtwonum(5,11))
console.log(add(3,5))
