const ingredients = ['wine', 'tomato', 'onion', 'mushroom']

// a cooking function
const cook = (ingredient) => {
    return `cooked ${ingredient}`
}

const wineReduction = ingredients.reduce((sauce, item) => {
  return sauce += cook(item) + ', '
  }, '')