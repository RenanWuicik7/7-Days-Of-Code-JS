// Define a função chances() globalmente
function chances(tentativa) {
    if(tentativa == 1) {
        return "restam somente 2 chances";
    } else if(tentativa == 2) {
        return "resta somente 1 chance";
    }
}

// Define a função adivinhaNumero() globalmente
function adivinhaNumero() {
    const numeroFixo = 7;
    let tentativa = 0;
    let chute = parseInt(prompt("Tente adivinhar qual número de 0 a 10 eu pensei (você tem 3 tentativas):"));

    const escreverHTML = document.getElementById("botao-js");

    while (tentativa <= 2) {
        if (chute == numeroFixo) {
            escreverHTML.innerHTML = "<p class='container__div'>Parabéns! Você acertou o número</p>";
            break;
        } else {
            tentativa++;
            if (tentativa > 2) {
                escreverHTML.innerHTML = "<p class='container__div'>Infelizmente você errou todas as tentativas. O número era " + numeroFixo + "</p>";
                break;
            } else {
                chute = parseInt(prompt("Infelizmente você errou. Tente novamente (" + chances(tentativa) + "):"));
                escreverHTML.innerHTML = "<p class='container__div'>Infelizmente você errou. Tente novamente (Restam somente " + chances(tentativa) + "):</p>";
            }
        }
    }
}

function ativaFuncoes() {
    // Chama a função adivinhaNumero() quando o botão "Executar" for clicado
    alert("Vou pensar em um numero de 0 à 10....Pronto pensei");
    adivinhaNumero();
}
