// Objects are key value of pairs 
// Singleton objects
// Objectscreation 
// Objects Literals
const mySym = Symbol('keys')
const User_customer_information = {
    name:'Raju',
    age:21,
    location:'Delhi',
    [mySym]:'mySym',
    email:'rajuk631149@gmail.com',
    isLoggedIn :true,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(User_customer_information);
// console.log(User_customer_information.email);
// console.log(User_customer_information["email"]);
// console.log(User_customer_information[mySym]);

User_customer_information.email= 'rajuk@google.com'
console.log(User_customer_information.email);
// Object.freeze(User_customer_information)
User_customer_information.email='rajukumar@chatgpt.com';
console.log((User_customer_information));

User_customer_information.greeting = function(){
    console.log("Hello JS user");
}
User_customer_information.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(User_customer_information.greeting());
console.log(User_customer_information.greetingTwo());

