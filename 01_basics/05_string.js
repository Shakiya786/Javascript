const name = "shakiya"
const subCount = 10

//console.log(name+subCount);

//console.log(`my name is ${name} and my subject count is ${subCount}`);

const subName = new String('maths')

//console.log(subName[0]);
console.log(subName.__proto__);


console.log(subName.length);
console.log(subName.toUpperCase());
console.log(subName.charAt(3));
console.log(subName.indexOf('t'));

const newString = subName.substring(0,3)
console.log(newString);

const anotherString = subName.slice(-5,4)
console.log(anotherString);

const newStringOne = " soni "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shakiya.com/shakiya%09title"

console.log(url.replace('%20', '-'))

console.log(url.includes('shakiya'))

console.log(subName.split('-'));