function calculoDeVitorias(vitorias, derrotas) {
  return vitorias - derrotas
}

function nivelDoJogador(vitorias) {
  let nivel

  if (vitorias <= 10){
    nivel = "Ferro"
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze"
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata"
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro"
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante"
  } else if (vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"
  } else {
    nivel = "Imortal"
  }

  return nivel
}

function exibirMensagem (vitorias, derrotas) {
  let saldoVitorias = calculoDeVitorias(vitorias, derrotas)
  let nivel = nivelDoJogador(vitorias)
  return `O herói tem saldo de ${saldoVitorias} e está no nivel de ${nivel}`
}


let vitorias = 350
let derrotas = 120
let resultado = exibirMensagem(vitorias, derrotas)
console.log(resultado)