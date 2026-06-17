const marvel_hero = ["thor", "ironman", "spiderman"]
const dc_hero = ["superman", "batman", "flash"]

// marvel_hero.push(dc_hero) // push create a array into array 

// console.log(marvel_hero);
// console.log(marvel_hero[3][1]);

// const allHero = marvel_hero.concat(dc_hero) // concat create a new array merging both arrrays
// console.log(allHero);

const all_new_heros = [...marvel_hero,...dc_hero,/* ...another_array*/] // it also seperate elements same as concate but more usefull as mulitples array can be used
// console.log(all_new_heros);

const new_array = [1 ,2, 3, [4,5 ,6],7 ,8 ,[9 ,[10]]]

const real_new_array = new_array.flat(Infinity) // flat merges all the complex layer of array into one aaray and take (depth) as input;
console.log(real_new_array);


console.log(Array.isArray("Tanmay"))
console.log(Array.from("Tanmay"))
console.log(Array.from({name: "Tanmay"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));