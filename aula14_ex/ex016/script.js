window.document.querySelector("input#bot").addEventListener("click", contar);

function contar() {
  var inic = document.querySelector("input#inic");
  var fim = document.querySelector("input#fim");
  var passos = document.querySelector("input#pas");
  var res = document.querySelector("div#res");

  if (
    inic.value.length == 0 ||
    fim.value.length == 0 ||
    passos.value.length == 0
  ) {
    window.alert("[ERRO] Preencha todos os campos!");
    res.innerHTML = 'Impossível contar!'
  } else {
    res.innerHTML = "Contando: ";
    var i = Number(inic.value);
    var f = Number(fim.value);
    var p = Number(passos.value);
    if (i < f) {
      if (passos.value == 0) {
        window.alert("ALERTA: passos com mínimo de 1, iniciando...");
        res.innerHTML = "Contando: ";
        var i = Number(inic.value);
        var f = Number(fim.value);
        var p = 1;
        for (let c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F449}`;
        }
        res.innerHTML += " \u{1F4A5}";
      } else {
        for (let c = i; c <= f; c += p) {
          res.innerHTML += `${c} \u{1F449}`;
        }
        res.innerHTML += " \u{1F4A5}";
      }
    } else if (i > f) {
      if (passos.value == 0) {
        window.alert("ALERTA: passos com mínimo de 1, iniciando...");
        res.innerHTML = "Contando: ";
        var i = Number(inic.value);
        var f = Number(fim.value);
        var p = 1;
        for (let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1F449}`;
        }
        res.innerHTML += " \u{1F4A5}";
      } else {
        for (let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1F449}`;
        }
        res.innerHTML += " \u{1F4A5}";
      }
    } else {
      res.innerHTML = "Você ja esta no seu destino!";
    }
  }
}
