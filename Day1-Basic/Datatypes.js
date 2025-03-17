// There are total 7 datatypes 
// Datatypes are primitve and nonprimitve dataypes
// strings, number,null,undefined,boolean , arrays,objects, function,symbols,bigint;

const firstName = `Raju kumar`
console.log(firstName);

const favouritNumber = 34;
console.log(favouritNumber);

const temp = null;
console.log(temp);

const infiniteValue = undefined;
console.log(infiniteValue);

const conditionCheck = true;
console.log(conditionCheck);

const arrayNumber = [1,3,2,4,5,7,6,8,9,10];
console.log(arrayNumber);

const personDetails = {
    name : 'Rajukumar',
    age : 20,
    ismarragied : false,
    address : {
        state : "Delhi",
        country : "India" 
    },
    greet : function greeting(){
        console.log("Hello ji ");
        
    },
};
console.log(personDetails);

function startPrinting(number){
    for(let i=0;i<=5;i++){
        console.log(" * * ")
    }
}
// startPrinting(5);

//  symbols and bigint bad mai dekha gha 



