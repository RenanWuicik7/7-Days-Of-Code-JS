function ativaFuncoes() {
    const qualArea = parseInt(prompt("Você quer seguir para área de 'Front-End'(Digite 1) ou de 'Back-End'(Digite 2)?"));
    if(qualArea == 1) {
        linguagem = prompt("Você quer aprender React ou Vue?");
    } else if(qualArea == 2) {
        linguagem = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Você não inseriu uma área válida! Recarregue a Página e tente novamente.");
    }

    let especializacaoOuFull = parseInt(prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack:"));

    if(especializacaoOuFull == 1) {
        alert("Continue se especializando em " + linguagem + " para dominar a área de sua escolha!");
    } else if(especializacaoOuFull == 2) {
        alert("Chegou a hora de começar a aprender outras linguagens além de " + linguagem + " se você quer se tornar Fullstack!");
    } else {
        alert("Valor Inválido, tente novamente!");
    }

    const enunciadoHtml = document.getElementsByClassName("container-txt-1")[0];
    enunciadoHtml.innerHTML = "<p>Essas são as linguagens que você quer aprender:</p>";
    const textoHTML = document.getElementsByClassName("container__txt-2")[0];
    textoHTML.innerHTML = "<p>" + linguagem + "</p>";

    var maisLinguagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite S em caso positivo. Senão Digite N e encerramos aqui.");

    const divHtml = document.getElementsByClassName("container__div")[0];

    while(maisLinguagem == "s" || maisLinguagem == "S") {
        let mais = prompt("Qual ?");
        divHtml.innerHTML += "<p>" + mais + "</p>";
        var maisLinguagem = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite S em caso positivo. Senão Digite N e encerramos aqui.");
    }
    alert("Obrigado por usar nosso sistema");
}