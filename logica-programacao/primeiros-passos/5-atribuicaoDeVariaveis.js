console.log("Trabalhando com atribuição de variáveis");

//const idade= 30;
let primeiroNome="Helena";
const sobrenome="Luz";

console.log(primeiroNome, sobrenome);
console.log(primeiroNome + " " + sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`) //interpolação de variável

primeiroNome = primeiroNome + sobrenome; //sobrescrita
console.log(primeiroNome);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
//nomeCompleto = 2; não pode atribuir um novo valor a uma constante

//para o gerenciamento de estado, o ideal é utilizar const o máximo que puder como boa prática

let idade; //declarando variável
idade = 26;
idade = idade+1;
console.log(idade);