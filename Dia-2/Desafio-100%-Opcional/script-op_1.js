/*
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const olaInicial = document.getElementById("js_txt");

olaInicial.innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "! Que Incrível";

const escreveNoDocumento = document.getElementById("js_txt-2");

const vcGosta = parseInt(prompt(nome + " você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO."));

if(vcGosta == 1) {
    escreveNoDocumento.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
} else if(vcGosta == 2) {
    escreveNoDocumento.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens? Tente procurar uma que você se dê bem e que lhe agrade";
}