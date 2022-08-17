console.log(`Trabalhando com condicionais.`);

const listaDeDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');
const idadeComprador = 18;
const estaAcompanhado = false;
const passagemComprada = true;

console.log("Destinos possíveis:");
listaDeDestinos.push('Curitiba');


listaDeDestinos.unshift('Itajaí'); //adiciona ao início do array.
listaDeDestinos.splice(2,1); //deleta itens do array, desde que, eu especifique qual posição está o item a ser excluído e, quantos itens irei excluir.

//console.log(listaDeDestinos[0] + " " +  'e' + " " + listaDeDestinos[2] + ', tem praias lindas!');

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if(idadeComprador>=18 || estaAcompanhado == true){
    console.log('Parabéns! Você vai para Itajaí.');
    listaDeDestinos.splice(0,1);console.log(listaDeDestinos);
} else{
        console.log('Compra não autorizada. Motivo: pessoa menor de idade, desacompanhada.');
    };
    console.log(listaDeDestinos);

console.log('Embarque: \n');
if(idadeComprador >= 18 && passagemComprada){
    console.log('Pode embarcar!');
} else {
    console.log('Seu embarque não está liberado!');
}