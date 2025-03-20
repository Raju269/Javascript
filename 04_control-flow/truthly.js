const email = [];
if(email){
    console.log(`Got user email`);
    
}
else{
    console.log('Dont have user email ');
    
}
// falsy value 
// false,0,-0,Bigint,0n,"",null,undefined,NaN

// truthy values 
// "0",'false'," "[],{},function(){}

if(email===0){
    console.log('Array is empty ');
    
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty ");
    
}
// Nullish Coalescing Operators (??): null undefiend
let val1; 
// val1 = 5??10;
// val1 = null??10;
// val1 = undefined??15;
val1 = null??10??20;
console.log(val1);


// Terniary operators 
// condition ? true : false 

const iceTeaPrice = 100 ;
iceTeaPrice<=80?console.log(`less than 80`):console.log("more than 80");
;

