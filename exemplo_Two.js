function calculoDeVitorias (vitorias, derrotas) {
  let totalDeVitorias = vitorias - derrotas
  return totalDeVitorias
}

let taxaDeVitorias = calculoDeVitorias(350, 120)
let nivel

if (taxaDeVitorias <= 10){
  nivel = "Ferro"
} else if (taxaDeVitorias >= 11 && taxaDeVitorias <= 20) {
  nivel = "Bronze"
} else if (taxaDeVitorias >= 21 && taxaDeVitorias <= 50) {
  nivel = "Prata"
} else if (taxaDeVitorias >= 51 && taxaDeVitorias <= 80) {
  nivel = "Ouro"
} else if (taxaDeVitorias >= 81 && taxaDeVitorias <= 90) {
  nivel = "Diamante"
} else if (taxaDeVitorias >= 91 && taxaDeVitorias <= 100){
  nivel = "Lendário"
} else {
  nivel = "Imortal"
}

console.log(`O Herói tem de saldo de ${taxaDeVitorias} está no nível de ${nivel}`)