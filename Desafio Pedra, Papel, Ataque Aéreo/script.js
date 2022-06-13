// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

  const playerOne = jogador1.toUpperCase();
  const playerTwo = jogador2.toUpperCase();
  
  const comparePlayers = (attackOne, attackTwo) =>  playerOne === attackOne && playerTwo === attackTwo;

    if(comparePlayers("ATAQUE", "ATAQUE")) print("Aniquilacao mutua");
    else if (comparePlayers("ATAQUE", "PEDRA")) print("Jogador 1 venceu");
    else if (comparePlayers("ATAQUE", "PAPEL")) print("Jogador 1 venceu");
    else if (comparePlayers("PEDRA", "ATAQUE")) print("Jogador 2 venceu");
    else if (comparePlayers("PEDRA ", "ATAQUE")) print("Jogador 2 venceu");
    else if (comparePlayers("PEDRA", "PEDRA")) print("Sem ganhador");
    else if (comparePlayers("PEDRA", "PAPEL")) print("Jogador 1 venceu");
    else if (comparePlayers("PAPEL", "ATAQUE")) print("Jogador 2 venceu");
    else if (comparePlayers("PAPEL", "PAPEL")) print("Ambos venceram");
    else if (comparePlayers("PAPEL", "PEDRA")) print("Jogador 2 venceu");
    else print("Sem ganhador");
}