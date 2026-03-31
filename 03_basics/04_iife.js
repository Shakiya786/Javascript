// Immediately Invoked Function Expressions (IIFE)
/*ction code(){
    console.log(`DB CONNECTED`);
}
code()*/


( function code(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
//()() first parenthesis is for function definition and second for execution .So this is IIFE.
// We use iife to remove global scope variable or pollution..

((name)=>{
    //without name IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    })(`SONI`)