// if control flow statement dekha rha hai hai jis mai ifelse , else if , swith case , ternary operators hota hai 
const isUserLoggedIn = true ;
const temperature = 44;
if(temperature == 44){
    console.log(`Temperature is less then 50 `);
    
}
else {
    console.log('Temperature is greater then 50 ');
    
}
// console.log("Execute ")
// comparsion <,>,<=,>=,===,!=,!==,==;
const score = 200;
if(score>100){
    let power = 'fly'
    console.log("User can fly ${power} ");
    
}
// console.log("User can fly ${power} ");
const balance = 1000;
// if(balance>500) console.log('Test'),console.log('tese2');
if(balance<500){
    console.log(`less than 500 `);
    
}
else if(balance<750){
    console.log("less than 800");
    
}
else {
    console.log('Greater than 900');
    
}

const userloggedin = true;
const debitcard = true;
const loggedformgoogle = false;
const loggedinfrommail = true;

if(userloggedin && debitcard && 2===2){
    console.log('All are good you can do that ');
    
}
if(userloggedin || loggedformgoogle && loggedinfrommail){
    console.log('You can complete javascript ');
    
}


