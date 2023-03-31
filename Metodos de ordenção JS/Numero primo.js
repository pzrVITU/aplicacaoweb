/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function verificarPrimo(numero) {
    // Verificamos se o número é menor ou igual a 1, que não são primos
    if (numero <= 1) {
      return false;
    }
    
    // Loop para verificar se há divisores do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        // Se encontramos um divisor, o número não é primo
        return false;
      }
    }
    
    // Se chegamos aqui, o número é primo
    return true;
  }

  /*Exemplo*/
  const numero = 17;
if (verificarPrimo(numero)) {
  console.log(`${numero} é um número primo`);
} else {
  console.log(`${numero} não é um número primo`);
}
