let oldArray =  [15, 2, 8, 36, 11, 4, 6 ,27]
// console.log(oldArray.map(piece => piece > 10))
// console.log(oldArray.filter(piece => piece > 10))
// console.log(oldArray.filter(piece =>  piece < 10))

// our list of ingredients in an array
const ingredients = ['wine', 'tomato', 'onion', 'mushroom']

// a cooking function
const cook = (ingredient) => {
    return `cooked ${ingredient}`
}
const wineReductionOld = ingredients.reduce((sauce, item, index, array) => {
  sauce += cook(item)
  if (index < array.length - 1) {
        sauce += ', '
        }
        return sauce
  }, '')
  
const wineReduction = ingredients.reduce((sauce, item, index, array) => {
  return (index < array.length - 1) ? sauce += `${cook(item)}, ` : sauce += `${cook(item)}`
}, '')
  
  console.log(wineReduction)
// wineReduction = "cooked wine, cooked tomato, cooked onion, cooked mushroom, "