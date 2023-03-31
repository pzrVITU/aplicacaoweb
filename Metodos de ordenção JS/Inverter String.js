/*
/*Curso de Engenharia de Software - UniEVANGÉLICA 
Aplicação Web
Dev: Victor Henrique Fernandes Silva 
28/03/2023
*/
function inverterString(str) {
    // Convertemos a string em um array de caracteres
    const chars = str.split('');
    
    // Invertemos o array
    const reversedChars = chars.reverse();
    
    // Juntamos os caracteres em uma string novamente
    const reversedString = reversedChars.join('');
    
    return reversedString;
  }
  
  /*Exemplo*/

const str = "exemplo";
const strInvertida = inverterString(str);
console.log(strInvertida); // "olpmexe"
