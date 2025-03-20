const marvel = ['Ironman','spiderman','loki','Thor','Natasha roya'];
const dcheroes = ['Batman','superman','flash','shehulk'];
// marvel.push(dcheroes);
// console.log(marvel);
// console.log(marvel[3][1]);
// const allheroes = marvel.concat(dcheroes);
// console.log(allheroes);
 
const all_heroes = [...marvel,...dcheroes];
console.log(all_heroes);
const another_array = [1,2,3[4,5],6,7,[8,9,10,11,,12,13,14],15,16];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Raju"));
console.log(Array.from({name:'Rajuji'}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

