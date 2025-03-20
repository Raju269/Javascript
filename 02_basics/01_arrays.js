// Lets start with Arrays
const cars = ['BMW','Breeza','Volvo','Wargan','RollsRoyal','Mercerds'];
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);
const subjects = [
    'Maths',
    'English',
    'Histroy'
];
// console.log(subjects);
// console.log(subjects[0]);
// console.log(subjects[1]);

const laptopNames = new Array('Dell','lenovo','hp','Ryzena','Macca','chromabook');
// console.log(laptopNames);
// console.log(typeof laptopNames);
laptopNames[0] = 'Pavalion';
// console.log(laptopNames);

const books = ['RichDadPoorDad','AtomicHabits','Ikkagika','48lawsofpower','Eatthatthefrog'];
// console.log(books.toString()); // its convets total string value 
// console.log(books.length);
// console.log(books.sort())

// console.log(books[0]);
// console.log(books[books.length-1]);
// console.log(cars[cars.length-1]);
// for(let i = 0; i<books.length;i++){
//     console.log(books[i]);
    
// }
// console.log(`\n`);

// for(let i = 0; i<cars.length;i++){
//     console.log(cars[i]);
    
// }
// Adding any arrays
// books.push('time management');
// books.push('How to people with people');
// console.log(books.length);
// books[9] = 'People skills';
// console.log(books);

// const fruits = ['bannan','lemon','Apple','Mango'];
// Array.isArray(fruits);
// (fruits instanceof Array);
// const type = typeof fruits;
// console.log(type);
// Nested Array and objects 
const personInformation = {
    name:'Piyush',
    age:20,
    car:'BMW',
    Accountinformation : [
        {name:'Raju',models:['bannan','lemon','Apple','Mango']},
        {name:'vikas',models:['bike','ship','bicylce','plane']},
        {name:'sumit',models:['bear','cat','lion','tiger']},
    ]
}
// console.table(personInformation);

// Arrays Methods
const drinksName = ['Coco','Pepis','Limca','Kingfisher','Royalgreen','MountainDew','monsterdrinks'];
const size = drinksName.length;
// console.log(size);
// console.table(drinksName);
// console.log(drinksName.toString());
// console.log(drinksName.toLocaleString());
// console.log(drinksName.at(3));
// console.log(drinksName.concat(cars));
// console.log(drinksName.join()); // its behave like tolocalstring and tostring()methods

// Popping and pushing 
// console.log(drinksName.pop());
// console.log(drinksName.push('orange drinks'));
// console.log(drinksName.shift());
// console.log(drinksName.unshift('Redbulls'));
// console.log(drinksName.copyWithin(2,0));
// console.log(drinksName);
// const numer = [1,2,3,4,5];
// console.log(numer.flatMap(numer,numer*10));
// splicing and slicing Arrays 


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// cartoonName.splice(2,0,'Robin','Spiderman','IronMan');
// // // console.log(cartoonName);
// // cartoonName.slice(1);
// console.log(cartoonName.slice(1));

const cartoonName = ['Goku','Ben','Powerranger','TeamTeens'];   
// console.log(cartoonName.indexOf('Goku'));
// console.log(cartoonName.lastIndexOf('TeamTeens'));
// console.log(cartoonName.includes('Ben'));
// console.log(cartoonName.sort())
// console.log(cartoonName.reverse());

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a - b});
// console.log(points);

const myArr = [0,1,2,3,4,5];
const myHeroes = ['shaktiman','naagraj'];
const myArray2 = new Array(2,3,4,);
console.log(myArray2[2]);

// Array Methods
myArr.push(6);
myArr.push(7);
myArr.pop();
myArr.unshift(9);
myArr.unshift(10);
myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newarr = myArr.join()
console.log(myArr);
console.log(newarr);

// slice,splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log("C ",myArr);
console.log(myn2);








