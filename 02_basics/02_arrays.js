const subName = ["Maths","English","Physics"]
const subName2 = ["Java","Python","HTML"]

subName.push(subName2)

//console.log(subName);
//console.log(subName[2][1]);

// Another method

//const allSub = subName.concat(subName2)
//console.log(allSub);

const all_new_sub = [...subName,...subName2]
//console.log(all_new_sub);

const another_array = [1,2,3,[4,5,6],[7,,6,7,[8,9]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("soni"))
// converted into array
console.log(Array.from("soni"))
console.log(Array.from({name: "soni"}))

let score1 = 100
let score2 = 300
let score3 = 500
console.log(Array.of(score1,score2,score3));