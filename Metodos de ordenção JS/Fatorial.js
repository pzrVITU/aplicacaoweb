/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function fatorial(num) {
    // Verificamos se o número é negativo
    if (num < 0) {
      return -1;
    }
    
    // Caso base
    if (num === 0) {
      return 1;
    }
    
    // Loop para calcular o fatorial
    let resultado = 1;
    for (let i = num; i > 0; i--) {
      resultado *= i;
    }
    
    return resultado;
  }
  
/*Exemplo*/
const numero = 5;
const resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`); // O fatorial de 5 é 120
