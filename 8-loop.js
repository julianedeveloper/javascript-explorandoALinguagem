console.log(`\n Trabalhando com condicionais.`);

const listaDeDestinos = new Array('Salvador','São Paulo', 'Rio de Janeiro');
const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = 'Itajai';

console.log("\n Destinos possíveis: \n");
listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);

listaDeDestinos.unshift('Itajaí'); //adiciona ao início do array.
listaDeDestinos.splice(4,1); //deleta itens do array, desde que, eu especifique qual posição está o item a ser excluído e, quantos itens irei excluir.

const podeComprar = idadeComprador>=18 || estaAcompanhado == true;
let contador = 0;
destinoExiste = false;
while(contador<4){
    if (listaDeDestinos[contador] == destino){
        console.log('Seu destino está disponível.');
        destinoExiste = true;
        break;
    } else{
        console.log('Desculpe, localidade indisponível no momento.')
        break;
    }
    contador++;
}

for(let i = 4; i < 4; i++){ //inicialização, condição e incremento, esse é o tripe para construir um FOR.
    if (listaDeDestinos[i] == destino){
        destinoExiste = true;
    } 
}
