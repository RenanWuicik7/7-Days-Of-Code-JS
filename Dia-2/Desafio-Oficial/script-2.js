/* - Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? */

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

const olaInicial = document.getElementById("js_txt");

olaInicial.innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "! Que Incrível";