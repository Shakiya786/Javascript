const userEmail = []

if(userEmail){
    console.log("Got user email");

}else {
    console.log(" don't have user email");

}

// falsy values

false , 0, -0, BigInt 0n, "",null , undefined , NaN

//truthy values

//"0" ,'false' , " ",[], {},function()
if(userEmail === 0){
    console.log("Got user email");
}

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
