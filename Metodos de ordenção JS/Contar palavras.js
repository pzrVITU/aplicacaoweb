function contarPalavras(str) {
    // Removemos espaços em branco no início e no fim da string
    const trimmedStr = str.trim();
    
    // Contamos o número de espaços em branco na string
    const count = (trimmedStr.match(/\s+/g) || []).length + 1;
    
    return count;
  }

  /*Exemplo*/

const str = "Exemplo de frase com várias palavras";
const numPalavras = contarPalavras(str);
console.log(numPalavras); // 6