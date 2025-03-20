// Immediately Invoke Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log('DB Connected');
    
})();
(
    (named) =>{
        console.log(`DB CONNECTED TWO ${named}`);
        
    }
)('Raju');