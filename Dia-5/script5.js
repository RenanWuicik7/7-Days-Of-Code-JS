let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let gerais = [];
let comida = "";
let categoria = "";

let inicio = alert("Vamos Começar! Para Adicionar um item na lista Digite Sempre 1, e quando acabar de adicionar o que deseja é só digitar 2");
var adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda '1' para sim ou '2' para não.");

while(adicionarMais == "1"){
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa?\n Temos As Categorias:\n 1 = Frutas;\n 2 = Laticínios;\n 3 = Doces;\n 4 = Congelados;\n 5 = Gerais");
    if(categoria == "1") {
        frutas.push(comida);
    } else if (categoria == "2") {
        laticinios.push(comida);
    } else if (categoria == "3") {
        doces.push(comida);
    } else if (categoria == "4") {
        congelados.push(comida);
    } else if (categoria == "5") {
        gerais.push(comida);
    } else if(categoria == "2") {
        alert("Obrigado por usar nosso sistema. Veja agora a sua lista!");
        break;
    } else {
        alert("Essa categoria não foi pré-definida.");
    }
    var adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda '1' para sim ou '2' para não.");
}

//Fazer em forma de lista ul e li
const textoFrutas = document.getElementById("lista-flex-frutas");
const textoLaticinios = document.getElementById("lista-flex-laticinios");
const textoDoces = document.getElementById("lista-flex-doces");
const textoCongelados = document.getElementById("lista-flex-congelados");
const textoGerais = document.getElementById("lista-flex-gerais");

textoFrutas.innerHTML = "<h2>Frutas</h2>";
textoFrutas.innerHTML += "<li>" + frutas + "</li>";

textoLaticinios.innerHTML = "<h2>Laticinios</h2>";
textoLaticinios.innerHTML += "<li>" + laticinios + "</li>";

textoDoces.innerHTML = "<h2>Doces</h2>"
textoDoces.innerHTML += "<li>" + doces + "</li>";

textoCongelados.innerHTML = "<h2>Congelados</h2>";
textoCongelados.innerHTML += "<li>" + congelados + "</li>";

textoGerais.innerHTML = "<h2>Gerais</h2>";
textoGerais.innerHTML += "<li>" + gerais + "</li>";