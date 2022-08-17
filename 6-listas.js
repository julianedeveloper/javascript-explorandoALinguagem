console.log(`Trabalhando com listas`);
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');
console.log("Destinos possíveis:");
listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //deleta itens do array, desde que, eu especifique qual posição está o item a ser excluído e, quantos itens irei excluir.
console.log(listaDeDestinos);

listaDeDestinos.unshift('Itajaí'); //adiciona ao início do array.
console.log(listaDeDestinos);

console.log(listaDeDestinos[0] + " " +  'e' + " " + listaDeDestinos[2] + ', tem praias lindas!');