// o que são vetores ou arrrays

//como declarar

/*let array = ['string', 1, true]; //pode guardar varios tipos de dados
console.log(array);

let array2 = ['string', 1, true];  //pegando parte específica do array
console.log(array2[1]);*/


let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[3])

//forEach
//array.forEach(function(item, index){console.log(item, index)});

//array.push('novo item') //inserir novo item no array
//console.log(array)

//array.pop('novo item') //retira item do array
//console.log(array)

//array.unshift('novo item') //inserir novo item no inicio do array
//console.log(array)

//array.splice(0, 3) //remove ou substitui um item pelo indice
//console.log(array)

let novoArray = array.slice(0,3); //retorna os 3 primeiros itens
console.log(novoArray)




