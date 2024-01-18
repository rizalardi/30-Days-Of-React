let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar')
let honey = shoppingCart.indexOf('Honey');
let tea = shoppingCart.indexOf('Tea')
shoppingCart.splice(honey,1);
shoppingCart.splice(tea, 1, 'Green Tea')

console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)