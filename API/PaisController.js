// Importa as dependências
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Define a classe para operações de leitura e escrita
class PaisController {
  constructor() {
    // Carrega a lista de países do arquivo "paises.json"
    const paisesFile = fs.readFileSync('paises.json');
    this.paises = JSON.parse(paisesFile);
  }

  // Retorna a lista de países
  getPaises() {
    return this.paises;
  }

  // Cria um novo país
  criarPais(nome, descricao, populacao, lingua) {
    const novoId = uuidv4();
    const novoPais = { id: novoId, nome, descricao, populacao, lingua };
    this.paises.push(novoPais);
    this.salvarPaises();
    return novoPais;
  }

  // Salva a lista de países no arquivo "paises.json"
  salvarPaises() {
    fs.writeFileSync('paises.json', JSON.stringify(this.paises));
  }
}

// Define a classe para operações de atualização e exclusão
class PaisEditarController {
  constructor() {
    // Carrega a lista de países do arquivo "paises.json"
    const paisesFile = fs.readFileSync('paises.json');
    this.paises = JSON.parse(paisesFile);
  }

  // Atualiza as informações de um país existente
  editarPais(id, nome, descricao, populacao, lingua) {
    const paisIndex = this.paises.findIndex(p => p.id === id);
    if (paisIndex < 0) {
      return null;
    }
    const paisAtualizado = {
      id,
      nome: nome || this.paises[paisIndex].nome,
      descricao: descricao || this.paises[paisIndex].descricao,
      populacao: populacao || this.paises[paisIndex].populacao,
      lingua: lingua || this.paises[paisIndex].lingua
    };
    this.paises[paisIndex] = paisAtualizado;
    this.salvarPaises();
    return paisAtualizado;
  }

  // Exclui um país existente
  excluirPais(id) {
    const paisIndex = this.paises.findIndex(p => p.id === id);
    if (paisIndex < 0) {
      return false;
    }
    this.paises.splice(paisIndex, 1);
    this.salvarPaises();
    return true;
  }

  // Salva a lista de países no arquivo "paises.json"
  salvarPaises() {
    fs.writeFileSync('paises.json', JSON.stringify(this.paises));
  }
}
