//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);

//console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
// avoid these kind of ( null and undefined ) comparision, they create confusion.


// === (triple equality) this is called strict comparision it is not only compare the values but also compare the datatypes

console.log("2" === 2);
