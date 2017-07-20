var animals = [
    { name: 'Fluffykins', specie: 'rabbit'},
    { name: 'Caro', specie: 'dog'},
    { name: 'Hamilton', specie: 'dog'},
    { name: 'Harold', specie: 'fish'},
    { name: 'Gatekeeper', specie: 'cat'},
    { name: 'Jimmy', specie: 'fish'}
]

// var names = animals.map(function(animal){ return animal.name}) 
// var names = animals.map((animal) => animal.name) // -> ECMA6

var names = animals.map((x) => x.name)

/*
var names = animals.map(function(animal){
    return animal.name + ' is a ' + animal.specie;
})
*/

/*
var names = []
for (var i = 0; i < animals.length; i++){
    names.push(animals[i].name)
}
*/

console.log(names)