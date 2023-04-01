function somarNumeros() {
  var minhaSection = document.getElementById("somar-container");
  if (minhaSection.style.display === "none") {
    minhaSection.style.display = "block";
  } else {
    minhaSection.style.display = "none";
  }      
}

function subtrairNumeros() {
  var sectionSubtrair = document.getElementById("subtrair-container");
  if (sectionSubtrair.style.display === "none") {
    sectionSubtrair.style.display = "block";
  } else {
    sectionSubtrair.style.display = "none";
  }      
}

function multiplicarNumeros() {
  var multiplicarSection = document.getElementById("multiplicar-container");
  if (multiplicarSection.style.display === "none") {
    multiplicarSection.style.display = "block";
  } else {
    multiplicarSection.style.display = "none";
  }      
}

function dividirNumeros() {
  var secaoDividir = document.getElementById("dividir-container");
  if (secaoDividir.style.display === "none") {
    secaoDividir.style.display = "block";
  } else {
    secaoDividir.style.display = "none";
  }      
}

function encerrarProcesso() {
  var secoes = ["somar-container", "subtrair-container", "multiplicar-container", "dividir-container"];
  for (var i = 0; i < secoes.length; i++) {
    var secao = document.getElementById(secoes[i]);
    secao.style.display = "none";
  }
  location.reload();
}

function exibeResultadoSoma() {
  const v1 = document.getElementById("input-soma-1");
  const v2 = document.getElementById("input-soma-2");
  const resultSome = document.getElementById("resultado-final-soma");

  resultSome.innerHTML = Math.round(parseInt(v1.value) + parseInt(v2.value));

  v1.value = "";
  v2.value = "";

}

function exibeResultadoDiminui() {
  const v3 = document.getElementById("input-diminuir-1");
  const v4 = document.getElementById("input-diminuir-2");
  const resultDimi = document.getElementById("resultado-final-diminui");
  
  resultDimi.innerHTML = Math.round(parseInt(v3.value) - parseInt(v4.value));

  v3.value = "";
  v4.value = "";

}

function exibeResultadoMultiplica() {
  const v5 = document.getElementById("input-multiplicar-1");
  const v6 = document.getElementById("input-multiplicar-2");
  const resultMulti = document.getElementById("resultado-final-multiplica");
  
  resultMulti.innerHTML = Math.round(parseInt(v5.value) * parseInt(v6.value));

  v5.value = "";
  v6.value = "";

}

function exibeResultadoDivide() {
  const v7 = document.getElementById("input-dividir-1");
  const v8 = document.getElementById("input-dividir-2");
  const resultDivi = document.getElementById("resultado-final-divide");
  
  resultDivi.innerHTML = Math.round(parseInt(v7.value) / parseInt(v8.value));

  v7.value = "";
  v8.value = "";

}