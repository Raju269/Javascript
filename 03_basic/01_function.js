function SaymyName(){
    console.log('Raju kumar');
    console.log('R');
    console.log('a');
    console.log('j');
    console.log('u');
    console.log('k');
    console.log('u');
    console.log('m');
    console.log('a');
    console.log('r');
    
}
// SaymyName()

function addtwoNumber(number1,number2){
    console.log(number1+number2);
    
}
function addtwoNumbers(number1,number2){
    let result = number1+number2;
    return result;
    return number1+number2
}
const result = addtwoNumbers(3,5);
console.log(result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please Enter a username");
        return;
        
    }
    return `${username} just loggind in `
}

console.log(loginUserMessage('Rj'));
console.log(loginUserMessage('Rsju'));

function CalucluateCarPrice(value1,value2,...num1){
    return num1
}
console.log(CalucluateCarPrice(200,400,500,2000));


const User = {
    username : 'Raju',
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleobjects(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,300,400,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,10000]));