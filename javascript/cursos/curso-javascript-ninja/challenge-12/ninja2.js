var obj = {
  x: 1,
  y: 2
};
var obj2 = Object.create(obj);
JSON.stringify(obj) // Transforma meu objeto para String pro JSON
JSON.parse(obj) // Transforma a String de volta para Objeto
obj2

obj2.prototype

obj2.x // 2
obj2.y // 2

obx.x = 2

obj2.x = 'lala'

obj2.y //lala


obj = Object.create({})

obj

Object.prototype

obj.toString()

arr = [];

arr.pop() // Remove do final
arr.push() // Coloca do final
arr.length // Mostra o total -> Tamanho
arr.push('feijao') 
arr.push('arroz') 
arr.push('macarrao') 
arr.pop('teste') 

arr.join() // Juntar os bagui
arr.join(' ')
console.log(' Teste ', arr.join(', '));
arr.reverse() // Inverter o array
arr.sort() // Ordenar em Ordem Alfabética


var objeto = {a: 1, b: 2, c: 3};
obj.toString()

var arr = [1, 2, 3, 4, 5];
arr.push = [5]
arr.push(4, 5, 6)
arr.toString() // Stringona
arr.join('-')
arr.concat(5)
arr.concat([6, 7, 8, 9, [12, 13, 14]]); // Junta tudo sem alterar
arr.unshift(); // Adiciona um no inicio
arr.shift(); // Remove do Inicio
arr.slice(1); // Retorna um novo arrei com os valor que quer primeiro indice ou ultimo indice por exemplo
arr.splice(); // Remove para frente
arr.splice(0, 1, 'a', 'b', 'c', 'd');
arr.every(function(){});
