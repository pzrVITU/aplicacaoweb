/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function somarMatriz(matriz) {
    let soma = 0;
    
    // Iteramos pela matriz e somamos cada número encontrado
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
      }
    }
    
    return soma;
  }
  
  /*Exemplo*/
  
    const matriz = [[1, 2], [3, 4], [5, 6]];
    const soma = somarMatriz(matriz);
    console.log(soma); // 21
