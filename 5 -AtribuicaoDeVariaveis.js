console.log('Trabalhando com atribuição de variáveis');
const idade = 29;
//const nome = 'Ricardo'; *const não pode mudar em hipótese alguma* *const doesn't change never.
const primeiroNome = 'Ricardo';
const sobrenome = 'Bugan';

//maneiras de como exibir espaço entre os :
console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);
//console.log(`Meu nome é ${nome} $}{sobrenome}`);
const nomeCompleto = nome + " " + sobrenome; 
//sempre preferir criar uma variável ao invés de renomear uma que já exista | prefer create a variable intead rename that one already exists
console.log(`Meu nome é ${nomeCompleto}`);

//sobre a declaração e atribuição de variáveis
let anoNascimento; //declarei a variável
anoNascimento = 1989; //atribui um valor a essa variável
//com CONST não posso declarar dessa maneira, tem que ser feita declaração e atribuição na mesma linha.
//com LET o JS permite que seja feita na mesma linha também, como se fosse um atalho.
