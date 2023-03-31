/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function fibonacci(quantidade) {
    // Casos base
    if (quantidade === 0) {
      return [];
    }
    
    if (quantidade === 1) {
      return [0];
    }
    
    if (quantidade === 2) {
      return [0, 1];
    }
    
    // Inicializamos a série de Fibonacci com os primeiros dois números
    const serie = [0, 1];
    
    // Loop para gerar os próximos números da série
    while (serie.length < quantidade) {
      const ultimo = serie[serie.length - 1];
      const penultimo = serie[serie.length - 2];
      serie.push(ultimo + penultimo);
    }
    
    return serie;
  }
  
  /*Exemplo*/

    const serie = fibonacci(50);
    console.log(serie); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025]
