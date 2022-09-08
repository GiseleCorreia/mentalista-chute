var numeroScreto = parseInt(Math.random() * 11)

function Chutar() {
  var chute = parseInt(document.getElementById('valor').value)

  var elementoResultado = document.getElementById('resultado')

  if (chute == numeroScreto) {
    elementoResultado.innerHTML = 'Acertou! O numéro secreto é ' + numeroScreto
    document.getElementById('resultado').style.color = 'green'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      'O seu chute deve ser um número entre 0 e 10. '
    document.getElementById('resultado').style.color = 'yellow'
  } else {
    elementoResultado.innerHTML = 'Errou!'
    document.getElementById('resultado').style.color = 'orangered'
  }
}
