/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function bubbleSort(arr) {
    const n = arr.length;
  
    // Loop através de todos os elementos do array
    for (let i = 0; i < n - 1; i++) {
  
      // Últimos i elementos já estão ordenados, então reduzimos o loop interno
      for (let j = 0; j < n - i - 1; j++) {
  
        // Verificamos se o elemento atual é maior que o próximo elemento
        if (arr[j] > arr[j + 1]) {
  
          // Trocamos os elementos usando uma variável temporária
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    // Retornamos o array ordenado
    return arr;
  }
  
/*Exempo utilizando a função*/
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // [11, 12, 22, 25, 34, 64, 90]
