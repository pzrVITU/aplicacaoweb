/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/

function calcularMedia(numeros) {
    // Verificamos se o array de números não está vazio
    if (numeros.length === 0) {
      return 0;
    }
    
    // Calculamos a soma de todos os números no array
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    
    // Calculamos a média dividindo a soma pelo número de números no array
    const media = soma / numeros.length;
    
    return media;
  }
  
  /*Exemplo*/

const numeros = [5, 7, 3, 8];
const media = calcularMedia(numeros);
console.log(media); // 5.75
