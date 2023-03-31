/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function calcularFatorial(n) {
    // Caso base: se n é igual a 0, retornamos 1
    if (n === 0) {
      return 1;
    }
    
    // Chamada recursiva: calculamos o fatorial de n - 1 e multiplicamos por n
    return n * calcularFatorial(n - 1);
  }
  
  /*Exemplo*/
    const fatorialDe5 = calcularFatorial(5);
    console.log(fatorialDe5); // 120
