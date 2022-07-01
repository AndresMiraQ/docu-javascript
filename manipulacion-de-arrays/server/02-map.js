const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const newArray = letters.map(letter => letter + letter); 
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//   newArray.push(letters[index] + letters[index]);
// }

console.log('Original', letters);
console.log('New', newArray);