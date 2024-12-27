// let arr =["apple","Banana","Orange"]

// let [a,b,c]=arr;
// console.log(b);

const arr = [1, [2, 3], 4];

const [first, [second, third], fourth] = arr;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
console.log(fourth); // 4
