//  datatypes are two primitve datatypes and Non-primitive datatypes 
// Primitive datatypes - number, string , boolean, null,undefined, 
const numberValue = 3.14;
console.log(numberValue);

const lastName = "kumarji";
console.log(lastName);

const conditionCheckValue = true;
console.log(conditionCheckValue);

const temperatureValue = null;
console.log(temperatureValue);

const account_Id_Password = undefined;
console.log(account_Id_Password);


// Non - Primitve Datatypes 
// Arrays, Objects, functions, 
const arrayValue =  [3,34,4,34,5,4,3];
console.log(arrayValue);

const accountInformation = {
    accountid : 123,
    accountName : "Raghav",
    accountaddress :{
        city : "Delhi",
        country : 'India'
    }
};
console.log(accountInformation);

function greeting(){
    for(let i = 0; i<=5;i++){
    console.table(["Good Moring pineapple you are very very beautiful "]);
    }
}

const result = greeting();
console.log(result);






